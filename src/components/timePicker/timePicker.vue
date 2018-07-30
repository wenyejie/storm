<!--
 - 时间选择器
 -
 - @author: Storm
 - @date: 2018/07/27
 -->
<template>
  <div class="s-timePicker">
    <s-input v-model="innerFormatVal"
             class="s-timePicker-input"
             @focus="handleFocus"
             @blur="handleBlur($event)"
             :name="name"></s-input>
    <s-icon type="time" class="s-timePicker-prefix"></s-icon>
    <div class="s-timePicker-spinner"
         v-if="spinnerVisible !== 0"
         @mouseover="handleMouseOver"
         @mouseout="handleMouseOut"
         v-show="spinnerVisible === 1">
      <div class="s-timePicker-spinner-content">
        <s-time-picker-spinner :list="hours"
                               @change="handleHourChange"
                               v-model="hour"></s-time-picker-spinner>
        <s-time-picker-spinner :list="minutes"
                               @change="handleMinuteChange"
                               v-model="minute"></s-time-picker-spinner>
        <s-time-picker-spinner :list="seconds"
                               @change="handleSecondChange"
                               v-model="second"></s-time-picker-spinner>
      </div>
      <div class="s-timePicker-spinner-footer">
        <button type="button"
                @click="handleCancel"
                class="s-timePicker-spinner-btn cancel">取消
        </button>
        <button type="button"
                @click="handleNow"
                class="s-timePicker-spinner-btn now">现在
        </button>
        <button type="button"
                @click="handleOk"
                class="s-timePicker-spinner-btn ok">确定
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import isDate from "../../utils/isDate";
  import zeroize from "../../filters/zeroize";
  import elOverflowToggle from "../../utils/elOverflowToggle";
  import sTimePickerSpinner from "./spinner.vue";
  import date from "../../filters/date";

  const getTimeList = (max = 59, min = 0) => {
    const result = [];
    for (let i = min; i <= max; i++) result.push({ value: i, selected: false, disabled: false });
    return result;
  };

  export default {
    name: "sTimePicker",
    filters: { zeroize },
    components: { sTimePickerSpinner },
    props: {

      // value
      value: {
        type: Date,
        default: () => new Date()
      },

      format: {
        type: String,
        default: "hh:mm:ss"
      },

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
    watch: {
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return;
        this.innerVal = val;
      }
    },
    data () {
      return {
        innerVal: this.value,
        hours: getTimeList(23),
        minutes: getTimeList(),
        seconds: getTimeList(),

        hour: 0,
        minute: 0,
        second: 0,

        spinnerVisible: 0
      };
    },
    computed: {
      innerFormatVal () {
        return date(this.innerVal, this.format);
      }
    },
    methods: {

      handleOk () {
        this.removeSpinner();
      },

      handleCancel () {
        this.innerVal = new Date(this.oldValue);
        this.removeSpinner();
      },

      handleNow () {
        this.innerVal = new Date();
        this.change(true);
      },

      removeSpinner () {
        this.oldValue = new Date(this.innerVal);
        this.spinnerVisible = 2;
      },

      change (isVisible) {
        if (isVisible) this.removeSpinner();
        this.innerVal = new Date(this.innerVal);
        this.$emit("input", this.innerVal);
      },

      handleHourChange (isVisible) {
        this.innerVal.setHours(this.hour);
        this.change(isVisible);
      },

      handleMinuteChange (isVisible) {
        this.innerVal.setMinutes(this.minute);
        this.change(isVisible);
      },

      handleSecondChange (isVisible) {
        this.innerVal.setSeconds(this.second);
        this.change(isVisible);
      },

      handleFocus () {
        this.spinnerVisible = 1;
      },

      handleBlur () {
        if (!this.isMouseOver) this.removeSpinner();
      },
      handleMouseOver () {
        this.isMouseOver = true;
        elOverflowToggle(true);
      },

      handleMouseOut () {
        this.isMouseOver = false;
        elOverflowToggle(false);
      }
    },
    created () {
      this.oldValue = this.value;
      if (isDate(this.value)) {
        this.hour = this.value.getHours();
        this.minute = this.value.getMinutes();
        this.second = this.value.getSeconds();
      } else {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
      }
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-timePicker {
    position: relative;

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
        display: flex;
        justify-content: flex-end;
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
      }
    }
  }
</style>