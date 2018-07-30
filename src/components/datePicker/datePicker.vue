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
    <div class="s-datePicker-spinner">
      <div class="s-datePicker-spinner-header">
        <button class="s-datePicker-btn prev">«</button>
        <button class="s-datePicker-btn prev">‹</button>
        <span class="s-datePicker-label">{{innerVal | date('YYYY')}}年</span>
        <span class="s-datePicker-label">{{innerVal | date('M')}}月</span>
        <button class="s-datePicker-btn next">»</button>
        <button class="s-datePicker-btn next">›</button>
      </div>
      <div class="s-datePicker-spinner-body">
        <table class="s-datePicker-table day">
          <thead>
            <tr>
              <th v-for="item in weeks">{{item}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in [0, 1, 2, 3, 4, 5]" :key="item">
              <td v-for="subitem in [0, 1, 2, 3, 4, 5, 6]"
                  :key="subitem">{{days[subitem + item * 7].value}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="s-datePicker-spinner-footer">
        <button type="button"
                @click="handleCancel"
                class="s-datePicker-btn cancel">取消
        </button>
        <button type="button"
                @click="handleToday"
                class="s-datePicker-btn now">今天
        </button>
        <button type="button"
                @click="handleOk"
                class="s-datePicker-btn ok">确定
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import date from "../../filters/date";
  import isDate from "../../utils/isDate";
  import zeroize from "../../filters/zeroize";
  import elOverflowToggle from "../../utils/elOverflowToggle";
  import getDays from './getDays';

  export default {
    name: "sDatePicker",
    filters: { zeroize, date },
    props: {
      value: {
        type: Date,
        default: () => new Date()
      },
      name: String,
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },

      weeks: {
        type: Array,
        default: () => ['日', '一', '二', '三', '四', '五', '六']
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
        days: null
      }
    },
    methods: {
      handleCancel () {

      },
      handleToday () {

      },
      handleOk () {

      },
      handleFocus () {
        elOverflowToggle(true);
      },
      handleBlur () {
        elOverflowToggle(false);
      }
    },
    created () {
      console.log(this.days = getDays(2018, 7));

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
        display: flex;
        position: relative;
        padding: 0 15px;
      }

      &-footer {
        height: 36px;
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid $blackLight;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      }
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

      td {
        cursor: pointer;
        &:hover:not(.selected):not(.today):not(.other):not(.disabled) {
          color: $primary;
        }

        &.selected {
          color: $primary;
          cursor: not-allowed;
        }

        &.today {
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