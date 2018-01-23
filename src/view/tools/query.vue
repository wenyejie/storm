<!--
 - query
 -
 - @author: Storm
 - @date: 2018/01/23
 -->
<template>
  <div class="page page-query">
    <textarea rows="10" v-model="queryString" @input="queryStringParse"></textarea>
    <s-highlight lang="json" v-if="queryString && queryJson">{{queryJson}}</s-highlight>
  </div>
</template>

<script>

  /**
   * 获取URL中带的链接参数
   * @param search 链接后缀
   * @return {{}} 对象
   */
  function getUrlParams (search) {
    search = search || location.search

    // 判断是否为字符串类型
    if (typeof search !== 'string') {
      search = search.toString()
    }

    var paramsSplit = search.replace(/^[^\?]*\?/i, '').split(/&/)
    var params = {}

    // 数据为空
    if (paramsSplit.length < 1) {
      return params
    }

    if (Array.isArray(paramsSplit)) {
      paramsSplit.forEach(function (item) {
        // 数据为空, 腿出方法
        if (!item) {
          return false
        }
        var itemSplit = item.split(/=/)

        // 判断字符串中是否有多个=
        if (itemSplit.length >= 2) { // 是
          var key = itemSplit.splice(0, 1)
          params[key] = itemSplit.join('=')
        }
      })
    }
    return params
  }

  export default {
    name: 'query',
    data () {
      return {
        queryString: '',
        queryJson: ''
      }
    },
    methods: {
      queryStringParse () {
        this.queryJson = JSON.stringify(getUrlParams(this.queryString))
      }
    }
  }
</script>

<style lang="scss" scoped>
  textarea {
    display: block;
    width: 100%;
  }


  pre {
    word-break: break-all;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>