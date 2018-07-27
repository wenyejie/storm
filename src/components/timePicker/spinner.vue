<!--
 - 
 -
 - @author: Storm
 - @date: 2018/07/27
 -->
<template>
  <ul class="s-timePickerSpinner" @scroll="handleScroll($event)">
    <li v-for="item in list"
        class="s-timePickerSpinner-item"
        :class="{selected: item.selected, disabled: item.disabled}"
        :key="item.value">{{item.value | zeroize}}
    </li>
  </ul>
</template>

<script>
  import zeroize from "../../filters/zeroize";

  export default {
    name: "sTimePickerSpinner",
    filters: { zeroize },
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    methods: {
      changeItemState (scrollTop) {
        this.list.forEach((item, index) => item.selected = scrollTop > index * 36 && scrollTop <= index * 36 + 36);
        this.oldScrollTop = scrollTop;
      },
      handleScroll ($event) {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.changeItemState.bind(this, $event.target.scrollTop), 64);
      }
    },
    created () {
      this.oldScrollTop = 0;
    }
  };
</script>

<style lang="scss" scoped>
  .s-timePickerSpinner {

  }
</style>