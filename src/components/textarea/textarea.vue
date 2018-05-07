<!--
 - textarea
 -
 - @author: Storm
 - @date: 2018/02/08
 -->
<template>
  <textarea class="s-textarea"
            :class="classes"
            :style="styles"
            v-model="innerVal"
            @input="handleInput"
            @change="handleChange"
            @keyup="handleKeyup"
            @keydown="handleKeydown"
            @focus="handleFocus"
            @blur="handleBlur"></textarea>
</template>

<script>
  import adaptiveHeight from '../../core/adaptiveHeight';
  export default {
    name: 'sTextarea',
    props: {
      value: {},

      // 块
      block: {
        type: Boolean,
        default: true
      },

      // 高度自适应
      autoRows: {
        type: [Boolean, Object],
        default: false
      }
    },
    computed: {
      classes () {
        return {
          [`s-textarea-block`]: !!this.block
        }
      },
      styles () {
        const result = {};
        if (this.autoRows) {
          result.height = this.height;
        }
        return result;
      }
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return;
        this.innerVal = val;
      },
      innerVal (val, oldVal) {
        if (val === oldVal) return;
        this.$nextTick(this.handleAutoRows)
      }
    },
    data () {
      return {

        // 值
        innerVal: this.value,

        // 高度
        height: 'auto'
      }
    },
    methods: {
      /**
       * 自动高度
       */
      handleAutoRows () {
        if (!this.autoRows) return;
        this.height = adaptiveHeight(this.$el, this.autoRows);
      },

      handleInput () {
        this.$emit('input', this.innerVal)
      },

      handleChange () {
        this.$emit('change')
      },

      handleKeyup ($event) {
        this.$emit('keyup', $event)
      },

      handleKeydown ($event) {
        this.$emit('keydown', $event)
      },

      handleFocus () {
        this.$emit('focus')
      },

      handleBlur () {
        this.$emit('blur')
      }
    },
    mounted () {
      this.handleAutoRows();
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-textarea {
    position: relative;
    display: inline-block;
    line-height: 1.5;
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px $lightGrey solid;
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
        border-color: $lightGrey;
      }
    }
  }
</style>