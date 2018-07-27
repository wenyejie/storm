<!--
 - 时间选择器
 -
 - @author: Storm
 - @date: 2018/07/27
 -->
<template>
  <div class="s-timePicker">
    <s-input v-model="innerVal"
             @focus="handleFocus"
             @blur="handleBlur"
             :name="name"></s-input>
    <div class="s-timePicker-spinner"
         v-if="spinnerVisible !== 0"
         @mouseover="handleMouseOver"
         @mouseout="handleMouseOut"
         v-show="spinnerVisible === 1">
      <div class="s-timePicker-spinner-content">
        <s-time-picker-spinner :list="hours"></s-time-picker-spinner>
        <s-time-picker-spinner :list="minutes"></s-time-picker-spinner>
        <s-time-picker-spinner :list="seconds"></s-time-picker-spinner>
      </div>
      <div class="s-timePicker-spinner-footer"></div>
    </div>
  </div>
</template>

<script>
  import zeroize from "../../filters/zeroize";
  import elHidden from "../../utils/elHidden";
  import sTimePickerSpinner from './spinner.vue';

  const getTimeList = (max = 59, min = 0) => {
    const result = [];
    for (let i = min; i <= max; i++) result.push({ value: i });
    return result;
  };

  export default {
    name: "sTimePicker",
    filters: { zeroize },
    components: {sTimePickerSpinner},
    props: {

      // value
      value: String,

      // name
      name: String,

      // 是否只读
      readonly: Boolean,

      // 是否禁用
      disabled: Boolean,

      // 是否可编辑
      editable: Boolean,

      // 占位符
      placeholder: String,

      // 大小
      size: {
        type: String,
        validator: val => ["lg", "sm", "xs"].includes(val)
      }
    },
    data () {
      return {
        innerVal: this.value,
        hours: getTimeList(23),
        minutes: getTimeList(),
        seconds: getTimeList(),

        spinnerVisible: 0
      };
    },
    methods: {

      handleFocus () {
        this.spinnerVisible = 1;
      },

      handleBlur () {
        // this.spinnerVisible = 2;
      },
      handleMouseOver () {
        elHidden(true);
      },

      handleMouseOut () {
        elHidden(false);
      }
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-timePicker {
    position: relative;

    &-spinner {
      position: absolute;
      width: 180px;
      margin: 7px 0 0;
      border: 1px solid #e4e7ed;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border-radius: 2px;
      user-select: none;

      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 15%;
      }

      &:before {
        @include triangle-top(#e4e7ed, 6px, 6px, 6px);

        filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
        top: -7px;
      }
      &:after {
        @include triangle-top(#fff, 6px, 6px, 6px);
        top: -6px;
      }

      &-content {
        display: flex;
        height: 190px;
        position: relative;

        &:after {
          content: '';
          border-top: 1px solid #e4e7ed;
          border-bottom: 1px solid #e4e7ed;
          display: block;
          position: absolute;
          left: 0;
          width: 100%;
          height: 36px;
          top: 50%;
          margin-top: -18px;
        }

        ul {
          flex: 1;
          height: 100%;
          overflow: auto;
          text-align: center;
          -ms-overflow-style: none;
          position: relative;
          z-index: 1;

          &::-webkit-scrollbar {
            display: none;
          }

          &:before,
          &:after {
            content: '';
            height: 78px;
            display: block;
          }

        }

        li {
          height: 36px;
          line-height: 36px;

          &.selected:not(.disabled) {
            color: #303133;
            font-weight: 700;
          }

          &.disabled {
            color: #c0c4cc;
            cursor: not-allowed;
          }

          &:hover {
            background-color: #f5f7fa;
            cursor: pointer;
          }

        }
      }

      &-footer {
        height: 36px;
      }
    }
  }
</style>