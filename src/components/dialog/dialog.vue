<!--
 - dialog
 -
 - @author: Storm
 - @date: 2018/01/20
 -->
<template>
  <transition name="s-dialog">
    <div class="s-dialog" :class="classes" v-if="visible">
      <s-mask class="s-dialog-mask"
              v-if="hasMask"
              v-model="hasMask"
              @click="handleMask"></s-mask>
      <div class="s-dialog-content">
        <div class="s-dialog-header" v-if="$slots.header || title">
          <slot name="header">
            <div class="s-dialog-title">{{title}}</div>
          </slot>
          <a class="s-dialog-close"
             v-if="hasClose"
             href="javascript:;"
             @click="handleClose">
            <s-icon type="close"></s-icon>
          </a>
        </div>
        <div class="s-dialog-body">
          <slot><div class="s-dialog-body-html" v-html="body"></div></slot>
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
            <slot name="footerButton"></slot>
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
  </transition>
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

      // 内容
      body: String,

      // 组件名称
      name: String,

      // 大小
      size: {
        type: String,
        validator (val) {
          return ['lg', 'md', 'sm', 'auto', 'fullscreen'].includes(val)
        }
      },

      // 遮罩层, 背景颜色
      backgroundColor: String,

      // 是否有遮罩层
      hasMask: {
        type: Boolean,
        default: true
      },

      // 可以通过背景移除弹出框
      maskRemove: Boolean,

      // 是否有尾部
      hasFooter: {
        type: Boolean,
        default: true
      },

      // 是否有关闭按钮
      hasClose: {
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
          [`s-dialog-${this.size}`]: !!this.size,
          [`s-dialog-${this.name}`]: !!this.name
        }
      },

      /**
       * 遮罩层样式
       * @return {Object}
       */
      maskStyles () {
        return {
          [`background-color`]: !!this.backgroundColor
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

      /**
       * 监听value值
       * @param val 新值
       * @param oldVal 旧值
       */
      value (val, oldVal) {

        // 如果新旧值相同, 则退出方法
        if (val === oldVal || val === this.visible) {
          return false
        }
        this.visible = val
      }
    },
    methods: {

      /**
       * 移除dialog
       */
      remove () {
        this.visible = false
        this.$emit('input', false)
      },

      /**
       * 弹出框操作
       */
      handleMask () {

        // 是否可以通过背景移除弹出框
        if (this.maskRemove) {
          this.$emit('mask')
          this.remove()
        }
      },

      /**
       * 取消事件
       */
      handleCancel () {
        this.$emit('cancel')
        this.remove()
      },

      /**
       * 确定时间
       */
      handleOk () {
        this.$emit('ok')
        this.remove()
      },

      /**
       * 关闭事件
       */
      handleClose () {
        this.$emit('close')
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
    transition: all .15s ease-in-out;

    &-enter,
    &-leave-active {
      opacity: 0;
      transform: scale(1.1);
    }

    &-content {
      position: absolute;
      width: 420px;
      @include hv-center-transform;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
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

    &-lg {
      .s-dialog {
        &-content {
          width: 900px;
        }
      }
    }

    &-md {
      .s-dialog {
        &-content {
          width: 600px;
        }
      }
    }

    &-sm {
      .s-dialog {
        &-content {
          width: 300px;
        }
      }
    }

    &-auto {
      .s-dialog {
        &-content {
          width: auto;
        }
      }
    }

  }
</style>