const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const vueConfig = require('./vue-loader.config');

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'static': path.resolve(__dirname, '../static')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
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
        test: /\.css$/,
        exclude: /node_modules/,
        use: isProd ? ExtractTextPlugin.extract({
          use: ['css-loader?minimize'],
          fallback: 'vue-style-loader'
        }) : ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: isProd ? ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'vue-style-loader'
        }) : ['vue-style-loader', 'css-loader', 'sass-loader']
      }/*,
      {
        test: /\.(scss|css)$/,
        use: isProd
          ? ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              }
            ],
            fallback: 'vue-style-loader'
          })
          : ['vue-style-loader', 'css-loader', 'sass-loader']
      }*/
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
      new webpack.LoaderOptionsPlugin({
        options: {
          vue: {
            loaders: {
              scss: 'style-loader!css-loader!sass-loader'
            }
          }
        }
      }),
      new VueLoaderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false}
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin({
        filename: 'common.[chunkhash].css'
      })
    ]
    : [
      new webpack.LoaderOptionsPlugin({
        options: {
          vue: {
            loaders: {
              scss: 'style-loader!css-loader!sass-loader'
            }
          }
        }
      }),
      new VueLoaderPlugin(),
      new FriendlyErrorsPlugin()
    ]
}
