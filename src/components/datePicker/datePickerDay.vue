<!--
 - 
 -
 - @author: Storm
 - @date: 2018/07/31
 -->
<template>
  <section class="s-datePicker-content">
    <header class="s-datePicker-header">
      <button class="s-datePicker-btn prev" @click="handlePrevYear">«</button>
      <button class="s-datePicker-btn prev" @click="handlePrevMonth">‹</button>
      <span class="s-datePicker-label" @click="handleYear">{{innerVal | date("YYYY")}}年</span>
      <span class="s-datePicker-label" @click="handleMonth">{{innerVal | date("M")}}月</span>
      <button class="s-datePicker-btn next" @click="handleNextYear">»</button>
      <button class="s-datePicker-btn next" @click="handleNextMonth">›</button>
    </header>
    <div class="s-datePicker-body">
      <table class="s-datePicker-table day">
        <thead>
          <tr>
            <th v-for="item in weeks">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td v-for="subitem in item"
                @click="handleDay(subitem)"
                :class="dayClasses(subitem)"
                :key="subitem.value"><span>{{subitem.value}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer class="s-datePicker-footer">
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
    </footer>
  </section>
</template>

<script>
  import date from "../../filters/date";
  import getDays from "./getDays";

  export default {
    name: "sDatePickerDay",
    filters: { date },
    props: {
      value: Date,
      weeks: {
        type: Array,
        validator: val => val.length === 7
      }
    },
    data () {
      return {
        innerVal: this.value,
        list: null
      };
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return;
        this.innerVal = val;
      }
    },
    methods: {

      /**
       * 点击月份变更模式
       */
      handleMonth () {
        this.$emit('mode', 'month');
      },

      /**
       * 点击年份变更模式
       */
      handleYear () {
        this.$emit('mode', 'year');
      },

      /**
       * 点击上一年按钮
       */
      handlePrevYear () {
        const date = this.innerVal;
        const day = date.getDate();

        date.setFullYear(date.getFullYear() - 1);

        if (date.getDate() !== day) date.setDate(0);

        this.innerVal = new Date(date);
        this.buildDays();
      },

      /**
       * 点击上一月事件
       */
      handlePrevMonth () {
        const date = this.innerVal;
        const day = date.getDate();
        date.setMonth(date.getMonth(), 0);
        if (day < date.getDate()) date.setDate(day);
        this.innerVal = new Date(date);
        this.buildDays();
      },

      /**
       * 点击下一年事件
       */
      handleNextYear () {
        const date = this.innerVal;
        const day = date.getDate();

        date.setFullYear(date.getFullYear() + 1);

        if (date.getDate() !== day) date.setDate(0);

        this.innerVal = new Date(date);
        this.buildDays();
      },

      /**
       * 点击下个月按钮
       */
      handleNextMonth () {
        const date = this.innerVal;
        const day = date.getDate();
        date.setMonth(date.getMonth() + 2, 0);
        const newDay = date.getDate();
        if (day < newDay) date.setDate(day);
        this.innerVal = new Date(date);
        this.buildDays();
      },

      /**
       * 天数的样式
       * @param selected 是否选中
       * @param other 是否是其它月份
       * @param disabled 是否禁用
       * @param today 是否今天
       */
      dayClasses ({ selected, other, disabled, today }) {
        return { other, disabled, today, selected };
      },

      /**
       * 点击天数
       * @param subitem
       */
      handleDay (subitem) {
        const date = this.innerVal;
        if (subitem.disabled || subitem.selected) return;
        if (!subitem.other) {
          date.setDate(subitem.value);
        } else {
          date.setMonth(date.getMonth() + (subitem.prev ? -1 : 1), subitem.value);
          this.buildDays();
        }
        subitem.selected = true;
        this.innerVal = new Date(this.innerVal);
        if (this.oldDays) this.oldDays.selected = false;
        this.oldDays = subitem;
        this.handleInput();
      },

      handleInput () {
        this.$emit("input", this.innerVal);
        this.oldDays = this.innerVal;
        this.$emit("hide");
      },

      /**
       * 构建月份天数
       */
      buildDays () {
        this.list = getDays(this.innerVal);
      },

      /**
       * 取消方法, 移除当前选中
       */
      handleCancel () {
        this.innerVal = this.oldDays;
        this.handleInput();
      },

      /**
       * 选中今天
       */
      handleToday () {
        this.innerVal = new Date();
        this.handleInput();
      },

      /**
       * 确定方法
       */
      handleOk () {
        this.handleInput();
      }
    },
    created () {
      this.buildDays();
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-datePickerDay {

  }
</style>