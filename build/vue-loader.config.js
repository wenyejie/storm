module.exports = {
  loaders: {
    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
    // the "scss" and "sass" values for the lang attribute to the right configs here.
    // other preprocessors should work out of the box, no loader config like this necessary.
    "scss": "vue-style-loader!css-loader!sass-loader"
  },
  // other vue-loader options go here
  // from vue config
  extractCSS: process.env.NODE_ENV === "production",
  sourceMap: false,
  preserveWhitespace: false,
  postcss: [
    require("autoprefixer")({
      browsers: [
        "> 2%",
        "last 10 Chrome versions",
        "not ie <= 9",
        "Android >= 4.2",
        "IOS >= 8"
      ]
    })
  ]
};