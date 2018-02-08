<!--
 - textarea
 -
 - @author: Storm
 - @date: 2018/02/08
 -->
<template>
  <textarea class="s-textarea"
            :class="classes"
            v-model="innerVal"></textarea>
</template>

<script>
  export default {
    name: 'sTextarea',
    props: {
      value: {},

      // 块
      block: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      classes () {
        return {
          [`s-textarea-block`]: !!this.block
        }
      }
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return;
        this.innerVal = val;
      }
    },
    data () {
      return {
        innerVal: this.value
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-textarea {
    position: relative;
    display: inline-block;
    line-height: 1.5;
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px #bfcbd9 solid;
    transition: border-color .3s ease;
    font-size: $md;

    &-block {
      display: block;
      width: 100%;
    }

    &:focus {
      border-color: #20a0ff;
    }

    &:disabled {
      background-color: #eef1f6;
      border-color: #d1dbe5;
      color: #bbb;
    }

    &[readonly] {
      cursor: default;

      &:focus {
        border-color: #bfcbd9;
      }
    }
  }
</style>