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
      <span class="s-datePicker-label" @click="handleYear">{{innerVal | date("YYYY")}}年</span>
      <button class="s-datePicker-btn next" @click="handleNextYear">»</button>
    </header>
    <div class="s-datePicker-body">
      <table class="s-datePicker-table month">
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td v-for="subitem in item"
                @click="handleMonth(subitem)"
                :class="monthClasses(subitem)"
                :key="subitem.value">{{subitem.value | month2cn}}月
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
              @click="handleNow"
              class="s-datePicker-btn now">现在
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
  import getMonths from "./getMonths";
  import month2cn from "../../filters/month2cn";

  export default {
    name: "sDatePickerMonth",
    filters: { date, month2cn },
    props: {
      value: Date
    },
    data () {
      return {
        innerVal: this.value,
        list: getMonths(this.value)
      };
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return;
        this.innerVal = val;
      }
    },
    methods: {

      handleOk () {
        this.handleInput();
      },

      handleCancel () {
        this.handleInput();
      },

      monthClasses ({ selected }) {
        return { selected };
      },

      handleInput () {
        this.innerVal = new Date(this.innerVal);
        this.$emit("input", this.innerVal);
        this.$emit("mode", 0);
      },

      handleYear () {
        this.$emit("mode", 2);
      },

      handlePrevYear () {
        const date = this.innerVal;
        const month = date.getMonth();
        date.setFullYear(date.getFullYear() - 1);
        if (date.getMonth() !== month) date.setDate(0);
      },

      handleNextYear () {
        const date = this.innerVal;
        const month = date.getMonth();
        date.setFullYear(date.getFullYear() + 1);
        if (date.getMonth() !== month) date.setDate(0);
      },

      handleNow () {
        this.innerVal = new Date();
      },

      handleMonth (subitem) {
        if (this.oldMonth) this.oldMonth.selected = false;
        subitem.selected = true;
        const date = this.innerVal;
        const day = date.getDate();
        date.setMonth(subitem.value);
        if (date.getDate() !== day) date.setDate(0);
        this.oldMonth = subitem;
        this.handleInput();
      }

    },
    created () {
      this.oldMonth = this.list[this.innerVal.getMonth()];
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-datePickerDay {

  }
  .s-datePicker-table.month {
    td {
      padding: 16px 0;
    }
  }
</style>