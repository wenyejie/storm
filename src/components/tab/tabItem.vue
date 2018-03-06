<!--
 - tab-item
 -
 - @author: Storm
 - @date: 2018/02/27
 -->
<template>
  <transition name="s-tabs-item">
    <div v-show="!hidden ? visible : true"
         v-if="hidden ? visible: true"
         :class="classes"
         class="s-tab-item"><slot></slot></div>
  </transition>
</template>

<script>
  export default {
    name: 'tab-item',
    props: {

      // 是否要移除dom
      hidden: Boolean,

      // name
      name: String,

      // 标题
      label: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        visible: false
      }
    },
    watch: {

      /**
       * 监听父元素的uid值
       * @param val
       * @param oldVal
       */
      '$parent.uid' (val, oldVal) {
        if (val === oldVal) return;
        this.visible = val === this._uid;
        if (this.visible) this.$emit('chosen')
      }
    },
    computed: {
      classes () {
        return {
          [`on`]: this.$parent.uid === this._uid
        }
      }
    },
    mounted () {
      this.$parent.addItem({
        _uid: this._uid,
        name: this.name,
        label: this.label
      });
    },
    beforeDestroy () {
      this.$parent.removeItem(this._uid);
    }
  }
</script>

<style lang="scss">
  .s-tabs-item {

  }
</style>