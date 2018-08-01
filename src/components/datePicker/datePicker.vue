<!--
 - 
 -
 - @author: Storm
 - @date: 2018/07/30
 -->
<template>
  <div class="s-datePicker" @click.stop>
    <s-input v-model="innerFormatVal"
             class="s-datePicker-input"
             @focus="handleFocus"
             :placeholder="placeholder"
             :name="name"></s-input>
    <s-icon type="time" class="s-datePicker-prefix"></s-icon>
    <div class="s-datePicker-spinner"
         v-if="spinnerVisible !== 0"
         v-show="spinnerVisible === 1">
      <s-day-picker @mode="handleMode($event)"
                    @input="handleDayInput"
                    v-model="innerVal"
                    v-show="mode === 0"
                    v-if="isDayVisible"
                    :weeks="weeks"></s-day-picker>

      <s-month-picker @mode="handleMode($event)"
                      v-show="mode === 1"
                      v-if="isMonthVisible"
                      v-model="innerVal"></s-month-picker>

      <s-year-picker @mode="handleMode($event)"
                     v-show="mode === 2"
                     v-if="isYearVisible"
                     v-model="innerVal"></s-year-picker>
    </div>
  </div>
</template>

<script>
  import date from "../../filters/date";
  // import isDate from "../../utils/isDate";
  import zeroize from "../../filters/zeroize";
  import sDayPicker from "./dayPicker.vue";
  import sMonthPicker from "./monthPicker.vue";
  import SYearPicker from "./yearPicker.vue";

  export default {
    name: "sDatePicker",
    components: { SYearPicker, sDayPicker, sMonthPicker },
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
        spinnerVisible: 0,

        // 是否显示日期选择
        isDayVisible: false,

        // 是否显示月份选择
        isMonthVisible: false,

        // 是否显示年份选择
        isYearVisible: false,

        // 模式 0: 天数, 1: 月份, 2: 年份
        mode: 0
      };
    },
    methods: {

      handleDayInput () {
        this.removeSpinner();
      },

      /**
       * 变更模式
       */
      handleMode (mode) {
        this.mode = mode;
        switch (mode) {
          case 0:
            this.isDayVisible = true;
            break;
          case 1:
            this.isMonthVisible = true;
            break;
          case 2:
            this.isYearVisible = true;
            break;
          default:
            break;
        }
      },

      /**
       * 移除面板
       */
      removeSpinner () {
        this.oldValue = new Date(this.innerVal);
        this.spinnerVisible = 2;
        document.removeEventListener("click", this.removeSpinner);
      },

      /**
       * 输入框获取焦点事件
       */
      handleFocus () {
        this.handleShow();
      },

      handleShow () {
        this.mode = 0;
        this.isDayVisible = true;
        this.spinnerVisible = 1;

        document.addEventListener("click", this.removeSpinner, { once: true });
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
        cursor: pointer;
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