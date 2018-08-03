<!--
 - 
 -
 - @author: Storm
 - @date: 2018/08/02
 -->
<template>
  <div class="s-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import arrayRemove from '../../utils/arrayRemove';

  export default {
    name: 'sCollapse',
    props: {
      value: {
        type: [Number, String]
      },

      // 手风琴模式
      accordion: Boolean
    },
    data () {
      return {
        innerVal: this.value
      };
    },
    methods: {
      handleChange (name, visible) {
        if (this.accordion) {
          if (visible === 1) this.innerVal.push(name);
          else this.innerVal = arrayRemove(this.innerVal, name)
        } else {
          this.innerVal = visible === 1 ? name : undefined;
        }
        this.$emit('change');
      }
    },
    created () {

      // 初始化
      if (!this.innerVal) {
        this.innerVal = this.accordion ? {} : undefined;
      }
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-collapse {
    border: 1px solid $blackLight;
    border-bottom: none;
    color: rgba(0, 0, 0, .65);
    border-radius: 4px;
    overflow: hidden;
  }
</style>