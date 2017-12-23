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
      <pre><code :language="lang" class="hljs" ref="code"><slot></slot></code></pre>
    </div>
  </div>
</template>

<script>
  import './assets/highlight.pack'

  export default {
    name: 'sHighlight',
    props: {
      // 语言
      lang: {
        default: 'javascript',
        type: String,
        validator (val) {
          return ['html', 'css', 'javascript', 'json', 'xml'].includes(val)
        }
      },

      // 主题
      theme: {
        type: String,
        default: 'github'
      }
    },
    mounted () {
      window.hljs.initHighlightingOnLoad()
    }
  }
</script>

<style lang="scss">
  /* Google Code style (c) Aahan Krish <geekpanth3r@gmail.com> */
  .hljs {
    display: block;
    overflow-x: auto;
    padding: .5em 1em;
    background: white;
    color: black;
    border: 1px #eee solid;
  }
  .hljs-comment,
  .hljs-quote {
    color: #800;
  }
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-section,
  .hljs-title,
  .hljs-name {
    color: #008;
  }
  .hljs-variable,
  .hljs-template-variable {
    color: #660;
  }
  .hljs-string,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-regexp {
    color: #080;
  }
  .hljs-literal,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-meta,
  .hljs-number,
  .hljs-link {
    color: #066;
  }
  .hljs-title,
  .hljs-doctag,
  .hljs-type,
  .hljs-attr,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-params {
    color: #606;
  }
  .hljs-attribute,
  .hljs-subst {
    color: #000;
  }
  .hljs-formula {
    background-color: #eee;
    font-style: italic;
  }
  .hljs-selector-id,
  .hljs-selector-class {
    color: #9b703f
  }
  .hljs-addition {
    background-color: #baeeba;
  }
  .hljs-deletion {
    background-color: #ffc8bd;
  }
  .hljs-doctag,
  .hljs-strong {
    font-weight: bold;
  }
  .hljs-emphasis {
    font-style: italic;
  }

</style>
