function getKeywords (vm) {
  const {keywords} = vm.$options;
  if (keywords) {
    return typeof keywords === 'function'
      ? keywords.call(vm)
      : keywords
  }
}

const serverKeywordsMixin = {
  created () {
    const keywords = getKeywords(this);
    if (keywords) {
      this.$ssrContext.keywords = keywords
    }
  }
};

const clientKeywordsMixin = {
  mounted () {
    const keywords = getKeywords(this);
    if (keywords) {
      document.querySelector('[name="keywords"]').content = keywords;
    }
  }
};

export default process.env.VUE_ENV === 'server'
  ? serverKeywordsMixin
  : clientKeywordsMixin
