<!--
 - switch开关
 -
 - @author: Storm
 - @date: 2018/07/27
 -->
<template>
  <label class="s-switch">
    <input class="s-switch-input"
           v-model="innerVal"
           @change="handleChange($event)"
           type="checkbox">
    <span class="s-switch-indi"></span>
  </label>
</template>

<script>
  export default {
    name: "sSwitch",
    props: {
      value: {},

      name: String,

      disabled: Boolean,

      trueValue: {
        default: true
      },

      falseValue: {
        default: false
      }
    },
    data () {
      return {
        innerVal: this.value
      };
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return;
        this.setInnerValue();
      }
    },
    methods: {
      handleChange ($event) {
        this.$emit('change', $event);
        this.handleInput();
      },

      handleInput () {
        this.$emit('input', this.innerVal ? this.trueValue : this.falseValue);
      },

      setInnerValue () {
        if (this.value === this.trueValue) this.innerVal = true;
        else if (this.value === this.falseValue) this.innerVal = false;
        else this.innerVal = !!this.value;
        this.handleInput();
      }
    },
    created () {
      this.setInnerValue();
    }
  };
</script>

<style lang="scss">
  .s-switch {
    position: relative;
    display: inline-block;
    height: 36px;
    width: 60px;

    &-input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      visibility: hidden;
    }

    &-indi {
      display: flex;
      width: 100%;
      height: 100%;
      border-radius: 18px;
      background-color: #fff;
      transition: background-color 0.1s, border 0.1s;
      border: 1px solid #dfdfdf;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 34px;
        height: 34px;
        border-radius: 18px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
      }
    }

    &-input:checked + &-indi {
      border-color: #1aad19;
      background-color: #1aad19;

      &:before {
        transform: translateX(24px);
      }
    }
  }
</style>