<!--
 - 
 -
 - @author: Storm
 - @date: 2018/07/27
 -->
<template>
  <ul class="s-timePickerSpinner" @scroll="handleScroll($event)">
    <li v-for="item in list"
        @click="handleClick(item)"
        class="s-timePickerSpinner-item"
        :class="{selected: item.selected, disabled: item.disabled}"
        :key="item.value">{{item.value | zeroize}}
    </li>
  </ul>
</template>

<script>
  import zeroize from '../../filters/zeroize';

  export default {
    name: 'sTimePickerSpinner',
    filters: { zeroize },
    props: {
      value: {
        type: Number,
        default: 0
      },
      list: {
        type: Array,
        required: true
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
        this.innerVal = val;
      }
    },
    methods: {
      handleChange (item, isVisible) {
        if (item.disabled || item.value === this.oldInnerVal) return;
        this.oldInnerVal = item.value;
        this.innerVal = item;
        this.list.filter(item => item.selected).forEach(item => item.selected = false);
        item.selected = true;
        this.$emit('input', item.value);
        this.$emit('change', isVisible);
      },

      scrollComputed (scrollTop) {
        this.handleChange(this.list[Math.round(scrollTop / 36)], false);
      },
      handleScroll ($event) {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.scrollComputed.bind(this, $event.target.scrollTop), 32);
      },

      handleClick (item) {
        this.handleChange(item, true);
      }
    },
    mounted () {
      this.$el.scrollTop = this.value * 36;
    },
    created () {
      this.oldInnerVal = this.innerVal;
      this.list[this.value].selected = true;
    }
  };
</script>