<!--
 - switch
 -
 - @author: Storm
 - @date: 2018/07/30
 -->
<template>
  <div class="page page-color">

    <s-panel title="Default 默认">
      <s-collapse>
        <s-collapse-item title="ONE">
          <div class="item">ONE CONTENT</div>
        </s-collapse-item>
        <s-collapse-item title="TWO">
          <div class="item">TWO CONTENT</div>
        </s-collapse-item>
      </s-collapse>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vCollapse',
    title: 'Collapse 折叠',
    data () {
      return {
        demo: 3
      };
    },
    created () {
    }
  };
</script>

<style lang="scss">
  .item {
    height: 120px;
  }
</style>
