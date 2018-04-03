<!--
 - panel
 -
 - @author: Storm
 - @date: 2017/12/16
 -->
<template>
  <section class="s-panel">

    <div class="s-panel-content">
      <header class="s-panel-header" v-if="headerVisible">
        <slot name="header">
          <h1 class="s-panel-title">
            <slot name="title">{{title}}</slot>
          </h1>
        </slot>
      </header>
      <div class="s-panel-body">
        <slot></slot>
      </div>
      <footer class="s-panel-footer" v-if="$slots.footer"></footer>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'sPanel',
    props: {
      title: String
    },
    computed: {
      /**
       * 头部是否可见
       * @return {boolean}
       */
      headerVisible () {
        return !!this.$slots.header || !!this.$slots.title || !!this.title
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-panel {
    border-radius: 4px;
    background-color: #fff;
    transition: all .3s ease;
    margin-bottom: 15px;

    &:not(:first-child) {
      margin-top: 45px;
    }

    &-header,
    &-footer {
      padding: 10px 0;
    }

    &-header {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &-title {
      font-size: 22px;
      color: $default;
    }

    &-body {
      padding: 30px;
      border: 1px solid #eaeefb;
      border-radius: 3px;
      transition:box-shadow .3s ease-in-out;

      &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
      }
    }

    &-footer {
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
</style>
