<!--
 - dialog
 -
 - @author: Storm
 - @date: 2018/01/20
 -->
<template>
  <div class="s-dialog" :class="classes" v-show="visible">
    <s-mask class="s-dialog-mask" v-if="hasMask" @click="handleMask"></s-mask>
    <div class="s-dialog-content">
      <div class="s-dialog-header" v-if="$slots.header || title">
        <slot name="header">
          <div class="s-dialog-title">{{title}}</div>
        </slot>
        <a class="s-dialog-close" href="javascript:;" @click="handleClose">
          <s-icon type="close"></s-icon>
        </a>
      </div>
      <div class="s-dialog-body">
        <slot></slot>
      </div>
      <div class="s-dialog-footer" v-if="hasFooter">
        <slot name="footer">
          <slot name="footerBefore"></slot>
          <s-button class="s-dialog-cancel"
                    @click="handleCancel"
                    v-if="hasCancel"
                    type="primary"
                    outline>
            <slot name="cancel">{{cancelText}}</slot>
          </s-button>
          <s-button class="s-dialog-ok"
                    @click="handleOk"
                    v-if="hasOk"
                    type="primary">
            <slot name="ok">{{okText}}</slot>
          </s-button>
          <slot name="footerAfter"></slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sDialog',
    props: {

      // value
      value: {
        type: Boolean,
        default: false
      },

      // 标题
      title: String,

      // 大小
      size: {
        type: String,
        validator (val) {
          return ['lg', 'sm', 'xs', 'auto'].includes(val)
        }
      },

      // 是否有遮罩层
      hasMask: {
        type: Boolean,
        default: true
      },

      // 是否有尾部
      hasFooter: {
        type: Boolean,
        default: true
      },

      // 是否有确定按钮
      hasOk: {
        type: Boolean,
        default: true
      },

      // 是否有取消按钮
      hasCancel: {
        type: Boolean,
        default: true
      },

      // 确定按钮文本
      okText: {
        type: String,
        default: '确定'
      },

      // 取消按钮文本
      cancelText: {
        type: String,
        default: '取消'
      }
    },
    computed: {

      /**
       * class name
       * @return {Object}
       */
      classes () {
        return {
          [`s-dialog-${this.size}`]: !!this.size
        }
      }
    },
    data () {
      return {

        // 可见性
        visible: this.value
      }
    },
    watch: {
      value (val, oldVal) {

        // 如果新旧值相同, 则退出方法
        if (val === oldVal || val === this.visible) {
          return false
        }
        this.visible = val
      }
    },
    methods: {

      remove () {
        this.visible = false
        this.$emit('input', false)
      },

      handleMask () {
        this.remove()
      },

      handleCancel () {
        this.remove()
      },

      handleOk () {
        this.remove()
      },

      handleClose () {
        this.remove()
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-dialog {
    position: fixed;
    @include absolute-center;
    z-index: 1024;

    &-content {
      position: absolute;
      width: 420px;
      @include hv-center-transform;
      background-color: #fff;
      border-radius: 5px;
    }

    &-header {
      position: relative;
      padding: 20px 20px 0;
    }

    &-title {
      font-size: $lg;
      line-height: 1;
      font-weight: 700;
      color: #333;
    }

    &-close {
      font-size: 24px;
      position: absolute;
      color: #999;
      right: 20px;
      top: 16px;
      line-height: 1;

      .s-icon {
        display: block;
      }
    }

    &-body {
      padding: 30px 20px;
      color: #48576a;
      font-size: $md;
      position: relative;
    }

    &-footer {
      padding: 10px 20px 15px;
      text-align: right;
    }

    .s-button + .s-button {
      margin-left: 6px;
    }

  }
</style>