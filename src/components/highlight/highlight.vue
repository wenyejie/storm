<!--
 - highlight
 -
 - @author: Storm
 - @date: 2017/12/20
 -->
<template>
  <div class="s-highlight">
    <div class="s-highlight-tool"></div>
    <div class="s-highlight-content">
      <pre><code :language="lang" :class="`language-${lang}`"><slot></slot></code></pre>
    </div>
  </div>
</template>

<script>
  import './prism'
  export default {
    name: 'sHighlight',
    props: {
      // 语言
      lang: {
        default: 'javascript',
        type: String,
        required: true,
        validator (val) {
          return ['html', 'css', 'javascript', 'json'].includes(val)
        }
      },

      // 主题
      theme: {
        type: String,
        default: 'github'
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  @import "./prism.css";
</style>
