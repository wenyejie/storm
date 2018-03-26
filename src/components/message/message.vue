<!--
 - message
 -
 - @author: Storm
 - @date: 2018/02/24
 -->
<template>
  <transition name="s-message">
    <div class="s-message" :class="classes" v-if="visible">
      <s-icon :class="iconClasses"
              class="s-message-type"
              v-if="iconType"
              :type="iconType"></s-icon>
      <div class="s-message-content">
        <a class="s-message-close" @click="handleClose" v-if="hasClose">
          <s-icon type="close"></s-icon>
        </a>
        <div class="s-message-header" v-if="$slots.header || title">
          <slot name="header"><h2>{{title}}</h2></slot>
        </div>
        <div class="s-message-body">
          <slot>
            <div v-html="body"></div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message',
    props: {
      value: Boolean,

      // 标题
      title: String,

      // 类型
      type: {
        type: String,
        validator (val) {
          return ['success', 'warning', 'info', 'danger'].includes(val)
        }
      },

      // 内容
      body: String,

      // 是否有关闭按钮
      hasClose: {
        type: Boolean,
        default: true
      },

      // 持续时间
      duration: {
        type: Number,
        default: 3000
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
        if (val === oldVal || val === this.visible) return
        this.show();
      }
    },
    computed: {
      classes () {
        return {}
      },
      iconType () {
        switch (this.type) {
          case 'success':
            return 'roundcheckfill'
          case 'warning':
            return 'warningfill'
          case 'info':
            return 'infofill'
          case 'danger':
            return 'roundclosefill'
          default:
            return false
        }
      },
      iconClasses () {
        return `s-message-${this.type}`
      }
    },
    methods: {



      /**
       * 展示消息提示
       */
      show () {
        this.visible = true;
        this.$emit('input', true);

        // 判断是否自动移除
        if (this.duration) {
          setTimeout(this.remove, this.duration)
        }
      },

      /**
       * 移除消息提示
       */
      remove () {
        this.visible = false
        this.$emit('input', false)
      },

      /**
       * 移除消息提示
       */
      handleClose () {
        this.remove()
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-message {
    position: fixed;
    top: 15px;
    right: 15px;
    padding: 20px;
    background-color: #fff;
    width: 330px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    transition: all .3s ease-in-out;
    overflow: hidden;
    border-radius: 2px;

    &-enter,
    &-leave-active {
      opacity: 0;
      transform: translateX(100%);
    }

    &-close {
      position: absolute;
      cursor: pointer;
      color: $lightGrey;
      top: 20px;
      right: 20px;
      line-height: 1;
      font-size: 18px;
    }

    &-type + &-content {
      padding-left: 55px;
    }

    &-type {
      font-size: 40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &-success {
      color: $success;
    }

    &-info {
      color: $info;
    }

    &-warning {
      color: $warning;
    }

    &-danger {
      color: $danger;
    }

    &-header + &-body {
      margin-top: 10px;
    }

    &-body {
      color: #8391a5;
      text-align: justify;
    }
  }
</style>