<!--
 - 
 -
 - @author: Storm
 - @date: 2018/08/02
 -->
<template>
  <div class="s-collapse-item" :class="classes">
    <div class="s-collapse-header" @click="handleClick">
      <slot name="header">
        <s-icon :type="icon" class="s-collapse-icon"></s-icon>
        {{title}}
      </slot>
    </div>
    <transition name="s-collapse-body">
      <div class="s-collapse-body"
           ref="body"
           v-if="visible !== 0"
           v-show="visible === 1">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'sCollapseItem',
    props: {
      title: String,
      icon: {
        type: String,
        default: 'unfold'
      },
      name: [String, Number],

      disabled: Boolean
    },
    data () {
      return {
        innerName: this.name || this._uid,
        visible: 0

      }
    },
    watch: {

      // 判断是否为group
      isGroup () {
        return this.$parent.$options.name === "sCollapse";
      },

      active () {
        const parentValue = this.$parent.$options.value;
        return Array.isArray(parentValue) ? parentValue.includes(this.innerName) : parentValue === this.innerName;
      }
    },
    computed: {
      classes () {
        return {disabled: this.disabled, active: this.visible === 1}
      }
    },
    methods: {
      handleClick () {
        if (this.visible === 0 || this.visible === 2) this.visible = 1;
        else this.visible = 2;

        if (this.isGroup) {
          this.$parent.handleChange(this.innerName, this.visible);
        }
      }
    },
    mounted () {
      console.log('mounted');
    },
    beforeDestroy () {

    },
    created () {
      console.log('created');
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-collapse {
    &-item {
      &.active .s-collapse-icon {
        transform: rotate(0);
      }
    }

    &-header,
    &-body {
      border-bottom: 1px solid $blackLight;
    }

    &-icon {
      margin-right: 10px;
      transform: rotate(-90deg);
      transition: transform .3s ease-in-out;
    }

    &-header {
      line-height: 22px;
      padding: 12px 0 12px 15px;
      color: rgba(0, 0, 0, .85);
      cursor: pointer;
      position: relative;
      transition: all .3s;
      background-color: #fafafa;
    }

    &-body {
      padding: 15px;
      border-top: none;
      transition: all .3s ease-in-out;
      overflow: hidden;

      &-enter,
      &-leave-active {
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
        border-top: 0;
        border-bottom: 0;
      }
    }
  }
</style>