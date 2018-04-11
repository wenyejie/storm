/**
 * postcss config
 *
 * author: Storm
 * date: 2017/06/10
 */


module.exports = {
  plugins: [
    require('autoprefixer')({browsers: ['last 5 versions', 'Android >= 4.0', 'ios >= 8.0']})
  ]
}
