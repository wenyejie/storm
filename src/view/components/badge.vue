<!--
 - switch
 -
 - @author: Storm
 - @date: 2018/07/30
 -->
<template>
  <div class="page page-color">

    <s-panel title="Default 默认">
      <s-badge :value="12" class="item">
        <s-button>评论</s-button>
      </s-badge>
      <s-badge :value="6" class="item">
        <s-button>回复</s-button>
      </s-badge>

      <s-button>消息<s-badge :value="6"></s-badge></s-button>
    </s-panel>

    <s-panel title="Max 最大值">
      <s-badge :value="12" :max="10" class="item">
        <s-button>评论</s-button>
      </s-badge>
      <s-badge :value="100" :max="99">
        <s-button>回复</s-button>
      </s-badge>
    </s-panel>

    <s-panel title="isDot 小圆点">
      <s-badge :value="12" is-dot class="item">
        <s-button>评论</s-button>
      </s-badge>
      <s-badge :value="6" is-dot>
        <s-button>回复</s-button>
      </s-badge>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vBadge',
    title: 'Badge 标记',
    data () {
      return {
        demo: 0
      }
    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    margin-right: 40px;
  }
</style>
