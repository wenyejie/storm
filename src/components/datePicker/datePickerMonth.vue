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
      <table class="s-datePicker-table day">
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td v-for="subitem in item"
                @click="handleMonth(subitem)"
                :class="monthClasses(subitem)"
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
  export default {
    name: "sDatePickerDay",
    filters: { date },
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

      monthClasses ({selected}) {
        return {selected}
      },

      handleInput () {
        this.innerVal = new Date(this.innerVal);
        this.$emit('input', this.innerVal);
      },

      handleYear () {
        this.$emit('mode', 'year');
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
        this.oldMonth.selected = false;
        subitem.selected = true;
        this.oldMonth = subitem;
        this.innerVal = new Date(this.innerVal);
        this.$emit('mode', 'day');
        this.$emit('hide');
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
</style>