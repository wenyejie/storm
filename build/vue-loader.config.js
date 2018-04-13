module.exports = {
  // extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ],
  loaders: {
    scss: 'style-loader!css-loader!sass-loader',
    exclude: '/node_modules/'
  }
};
