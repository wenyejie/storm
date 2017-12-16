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
          <h3 class="s-panel-title">
            <slot name="title">{{title}}</slot>
          </h3>
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
    name: 'panel',
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
  .s-panel {
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: -4px 3px 3px 0 rgba(119, 151, 178, .16);

    & + & {
      margin-top: 20px;
    }

    &-header,
    &-footer {
      padding: 10px 15px;
      /*background-color: #f5f5f5;*/
    }

    &-header {
      border-bottom: 1px solid #ddd;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &-title {
      font-weight: bold;
      font-size: 16px;
    }

    &-body {
      padding: 15px;
    }

    &-footer {
      border-top: 1px solid #ddd;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
</style>
