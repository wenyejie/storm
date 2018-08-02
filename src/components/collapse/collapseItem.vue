<!--
 - 
 -
 - @author: Storm
 - @date: 2018/08/02
 -->
<template>
  <div class="s-collapse-item">
    <div class="s-collapse-header" v-if="$slots.header || title">
      <slot name="header">
        <h1 class="s-dialog-title">{{title}}</h1>
      </slot>
    </div>
    <div class="s-collapse-body"></div>
  </div>
</template>

<script>
  export default {
    name: 'sCollapseItem'
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-collapse {

    &-item {

    }

    &-header,
    &-body {
      border: 1px solid $blackLight;
    }

    &-header {
    }

    &-body {

    }
  }
</style>