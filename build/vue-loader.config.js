module.exports = {
  // extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 30 versions']
    })
  ],
  loaders: {
    scss: 'style-loader!css-loader!sass-loader',
    exclude: '/node_modules/'
  }
};
