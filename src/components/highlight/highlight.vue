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
      <pre><code :language="lang" class="hljs" :class="lang" ref="code"><slot></slot></code></pre>
    </div>
  </div>
</template>

<script>

  import getScript from '../../utils/getScript'

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
      if (window.hljs) {
        window.hljs.highlightBlock(this.$refs.code)
      } else {
        getScript('/static/highlight.pack.js')
          .then(script => {
            console.log(script, window.hljs)
            window.hljs.highlightBlock(this.$refs.code)
          })
      }
    }
  }
</script>

<style lang="scss">
  .s-highlight {
    margin-top: 15px;

    pre {
      word-break: break-all;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
  /* Google Code style (c) Aahan Krish <geekpanth3r@gmail.com> */
  .hljs {
    display: block;
    overflow-x: auto;
    padding: .5em 1em;
    background: white;
    color: black;
    border: 1px #d8d8d8 solid;
    border-radius: 4px;

    &-comment,
    &-quote {
      color: #800;
    }
    &-keyword,
    &-selector-tag,
    &-section,
    &-title,
    &-name {
      color: #008;
    }
    &-variable,
    &-template-variable {
      color: #660;
    }
    &-string,
    &-selector-attr,
    &-selector-pseudo,
    &-regexp {
      color: #080;
    }
    &-literal,
    &-symbol,
    &-bullet,
    &-meta,
    &-number,
    &-link {
      color: #066;
    }
    &-title,
    &-doctag,
    &-type,
    &-attr,
    &-built_in,
    &-builtin-name,
    &-params {
      color: #606;
    }
    &-attribute,
    &-subst {
      color: #000;
    }
    &-formula {
      background-color: #eee;
      font-style: italic;
    }
    &-selector-id,
    &-selector-class {
      color: #9b703f
    }
    &-addition {
      background-color: #baeeba;
    }
    &-deletion {
      background-color: #ffc8bd;
    }
    &-doctag,
    &-strong {
      font-weight: bold;
    }
    &-emphasis {
      font-style: italic;
    }
  }

</style>
