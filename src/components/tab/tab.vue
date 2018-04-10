<!--
 - tab
 -
 - @author: Storm
 - @date: 2018/02/27
 -->
<template>
  <div class="s-tab">
    <div class="s-tab-nav">
      <ul>
        <li v-for="item in list"
            :key="item._uid"
            :class="item._uid === uid ? 'on' : ''"
            @click="toggle(item)"
            v-html="item.label"></li>
      </ul>
    </div>
    <div class="s-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sTab',
    props: {

      // 所在
      value: {
        type: [Number, String],
        default: 0
      },

      // 方向
      direction: {
        type: String,
        default: 'horizontal',
        validator (val) {
          return ['horizontal', 'vertical'].includes(val)
        }
      },

      // 是否要移除DOM
      hidden: Boolean,

      // 名称
      name: {
        type: String,
        default: 'tab'
      }
    },
    data () {
      return {
        list: [],
        uid: 0,

      }
    },
    methods: {

      /**
       * 切换
       * @param item
       * @return {undefined}
       */
      toggle (item) {
        if (this.uid === item._uid) return
        this.uid = item._uid
        this.$emit('input', item.name)
      },

      /**
       * 增加子项
       * @param item
       */
      addItem (item) {
        this.list.push(item)
        if (this.list.length === 1) {
          this.toggle(item)
        }
      },

      /**
       * 移除子项
       * @param _uid
       */
      removeItem (_uid) {
        const index = this.list.findIndex(item => item._uid === _uid)

        this.list.splice(index, 1)
        if (this.list.length <= 0) {

        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-tab {

    &-nav {
      border-bottom: 1px solid #d1dbe5;

      ul {
        position: relative;
        display: flex;
      }

      li {
        padding: 0 16px;
        height: 40px;
        line-height: 40px;
        color: #8391a5;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        margin-bottom: -1px;
        transition: all .3s ease-in-out;

        &:hover {
          color: $default;
        }

        &.on {
          color: $primary;
          border-bottom-color: $primary;
        }
      }
    }
  }
</style>