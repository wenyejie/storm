<!--
 - 
 -
 - @author: Storm
 - @date: 2018/07/30
 -->
<template>
  <div class="s-datePicker">
    <s-input v-model="innerFormatVal"
             class="s-datePicker-input"
             @focus="handleFocus"
             @blur="handleBlur"
             :placeholder="placeholder"
             :name="name"></s-input>
    <s-icon type="time" class="s-datePicker-prefix"></s-icon>
    <div class="s-datePicker-spinner"
         @mouseover="handleMouseOver"
         @mouseout="handleMouseOut"
         v-if="spinnerVisible !== 0"
         v-show="spinnerVisible === 1">
      <s-date-picker-day @hide="handleDayHide"
                         @mode="handleMode($event)"
                         v-model="innerVal"
                         v-if="daysVisible !== 0 && mode === 'day'"
                         v-show="daysVisible === 1  && mode === 'day'"
                         :weeks="weeks"></s-date-picker-day>

      <s-date-picker-month @hide="handleMonthHide"
                           @mode="handleMode($event)"
                           v-if="monthVisible !== 0 && mode === 'month'"
                           v-show="monthVisible === 1 && mode === 'month'"
                           v-model="innerVal"></s-date-picker-month>
    </div>
  </div>
</template>

<script>
  import date from "../../filters/date";
  // import isDate from "../../utils/isDate";
  import zeroize from "../../filters/zeroize";
  import elOverflowToggle from "../../utils/elOverflowToggle";
  import sDatePickerDay from "./datePickerDay.vue";
  import sDatePickerMonth from "./datePickerMonth.vue";

  export default {
    name: "sDatePicker",
    components: { sDatePickerDay, sDatePickerMonth },
    filters: { zeroize, date },
    props: {
      value: {
        type: Date,
        default: () => new Date()
      },
      name: String,
      format: {
        type: String,
        default: "YYYY-MM-DD"
      },

      weeks: {
        type: Array,
        default: () => ["日", "一", "二", "三", "四", "五", "六"]
      },

      placeholder: String
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return;
        this.innerVal = val;
      }
    },
    computed: {
      innerFormatVal () {
        return date(this.innerVal, this.format);
      }
    },
    data () {
      return {
        innerVal: this.value,
        days: null,
        spinnerVisible: 0,

        daysVisible: 0,

        monthVisible: 0,

        // 模式
        mode: "day"
      };
    },
    methods: {

      /**
       * 变更模式
       */
      handleMode (mode) {
        this.mode = mode;
        if (mode === 'month') this.monthVisible = 1;
      },

      toggleDayVisible (toggle) {
        this.daysVisible = toggle;
      },


      handleMonthHide () {
        this.monthVisible = 2;
      },

      handleDayHide () {
        this.toggleDayVisible(2);
        this.removeSpinner();
      },

      /**
       * 移除面板
       */
      removeSpinner () {
        this.oldValue = new Date(this.innerVal);
        this.spinnerVisible = 2;
      },

      /**
       * 输入框获取焦点事件
       */
      handleFocus () {
        if (this.mode === "day") {
          this.toggleDayVisible(1);
        }
        this.spinnerVisible = 1;
      },

      /**
       * 输入框失去焦点事件
       */
      handleBlur () {
        if (!this.isMouseOver) this.removeSpinner();
      },

      /**
       * 鼠标在弹出框里面
       */
      handleMouseOver () {
        this.isMouseOver = true;
        elOverflowToggle(true);
      },

      /**
       * 鼠标离开弹出框
       */
      handleMouseOut () {
        this.isMouseOver = false;
        elOverflowToggle(false);
      }
    },
    created () {

    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-datePicker {
    position: relative;
    color: #606266;

    &-prefix {
      position: absolute;
      left: 5px;
      top: 50%;
      color: $lightGrey;
      transform: translateY(-50%);
    }

    & > &-input {
      padding-left: 20px;
    }

    &-spinner {
      position: absolute;
      width: 284px;
      margin: 7px 0 0;
      border: 1px solid $blackLight;
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
        @include triangle-top($blackLight, 6px, 6px, 6px);

        filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
        top: -7px;
      }
      &:after {
        @include triangle-top(#fff, 6px, 6px, 6px);
        top: -6px;
      }
    }

    &-header {
      text-align: center;
      padding: 15px;
      overflow: hidden;

      span {
        font-weight: 500;
        padding: 0 5px;
      }

      button {
        font-size: 16px;
        padding: 0 7px;
      }
    }

    &-body {
      position: relative;
      padding: 0 15px 5px;
    }

    &-footer {
      height: 36px;
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid $blackLight;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }

    &-table {
      width: 100%;
      text-align: center;
      font-size: 12px;

      th, td {
        padding: 8px 0;
      }

      th {
        border-bottom: 1px solid #ebeef5;
      }

      span {
        display: inline-block;
        vertical-align: middle;
        width: 24px;
        height: 24px;
        line-height: 24px;
      }

      td {
        cursor: pointer;
        &:hover:not(.selected):not(.today):not(.other):not(.disabled) {
          color: $primary;
        }

        &.selected {
          color: $primary;
          cursor: not-allowed;
        }

        &.today span {
          background-color: #409eff;
          color: #fff;
          border-radius: 50%;
        }

        &.other {
          color: #c0c4cc;
        }

        &.disabled {
          background-color: #f5f7fa;
          cursor: not-allowed;
          color: #c0c4cc;
        }
      }
    }
    &-btn {
      border: none;
      padding: 0 5px;
      margin: 0 5px;
      cursor: pointer;
      background-color: transparent;
      outline: none;
      font-size: 12px;

      &.ok {
        color: $primaryLight;
      }

      &.cancel {
        color: $lightGrey;
      }

      &.prev {
        float: left;
      }
      &.next {
        float: right;
      }
    }
  }
</style>