<!--
 - checkbox
 -
 - author: Storm
 - date: 2017/10/07
 -->

<template>
  <label class="s-checkbox">
    <input type="checkbox"
           class="s-checkbox-input"
           :name="name"
           :checked="checked"
           :true-value="trueValue"
           :false-value="falseValue"
           :disabled="disabled">
    <span class="s-checkbox-inner"></span>
    <span class="s-checkbox-label"><slot></slot></span>
  </label>
</template>

<script>
  export default {
    name: 'checkbox',
    props: {
      disabled: Boolean,
      name: String,
      value: {},
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      }
    },
    computed: {
      isGroup () {
        return this.$parent.name === 'checkbox-group'
      }
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal) return false
        this.setChecked()
      },
      trueValue (val, oldVal) {
        if (val === oldVal) return false
        this.setChecked()
      }
    },
    data () {
      return {
        checked: null
      }
    },
    methods: {
      setChecked () {
        this.checked = this.value === this.trueValue
      }
    }
  }
</script>

<style lang="scss">
  .s-checkbox {

  }
</style>
