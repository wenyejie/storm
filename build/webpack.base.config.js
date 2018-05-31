const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const vueLoaderConfig = require('./vue-loader.config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.PUBLISH_PATH,
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'static': path.resolve(__dirname, '../static'),
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.s?css?$/,
        use: isProd
          ? ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false
                }
              },
              'sass-loader?-autoprefixer!postcss-loader'
            ],
            fallback: 'vue-style-loader'
          })
          : ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
      new VueLoaderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false},
        sourceMap: false
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin({
        filename: 'common.[chunkhash].css'
      })
    ]
    : [
      new VueLoaderPlugin(),
      new FriendlyErrorsPlugin()
    ]
}
