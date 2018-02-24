<!--
 - message
 -
 - @author: Storm
 - @date: 2018/02/24
 -->
<template>
  <transition name="s-message">
    <div class="s-message" :class="classes" v-if="visible">
      <div class="s-message-content">
        <a class="s-message-close">
          <s-icon type="close"></s-icon>
        </a>
        <div class="s-message-header">
          <slot name="header"><h2>{{title}}</h2></slot>
        </div>
        <div class="s-message-body"><slot><div v-html="body"></div></slot></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message',
    props: {
      value: Boolean,
      title: String,
      type: {
        type: String,
        validator (val) {
          return ['success', 'warning', 'info', 'error'].includes(val)
        }
      },
      body: String
    },
    data () {
      return {
        visible: true
      }
    },
    computed: {
      classes () {
        return {}
      }
    }
  }
</script>

<style lang="scss">
  .s-message {
    position: fixed;
    top: 15px;
    right: 15px;
    padding: 20px;
    background-color: #fff;
    width: 330px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    transition: opacity .3s, transform .3s, right .3s, top .4s;
    overflow: hidden;
    border-radius: 2px;

    &-close {
      position: absolute;
      cursor: pointer;
      color: #bfcbd9;
      top: 20px;
      right: 20px;
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