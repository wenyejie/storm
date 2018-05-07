/**
 * postcss config
 *
 * author: Storm
 * date: 2017/06/10
 */


module.exports = {
  "plugins": [
    require('autoprefixer')([
      "> 2%",
      "last 10 Chrome versions",
      "not ie <= 9",
      "Android >= 4.2",
      "IOS >= 8"
    ])
  ]
}