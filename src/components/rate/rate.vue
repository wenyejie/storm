<!--
 - 
 -
 - @author: Storm
 - @date: 2018/08/02
 -->
<template>
  <div class="s-rate">
    <span v-for="(item, index) in list"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
          @click="handleClick(index)"
          class="s-rate-item"
          :key="index">
      <s-icon :type="judgeStatus(item, index) ? chosenType : voidType"
              :style="{color: judgeStatus(item, index) ? chosenColor : voidColor}"></s-icon>
    </span>
    <span class="s-rate-text" v-if="showText">{{tempText}}</span>
  </div>
</template>

<script>

  export default {
    name: 'sRate',
    props: {
      value: {
        type: Number,
        default: 0
      },

      max: {
        type: Number,
        default: 5
      },

      voidType: {
        type: String,
        default: 'favor'
      },

      voidColor: {
        type: String,
        default: '#c6d1de'
      },

      chosenType: {
        type: String,
        default: 'favorfill'
      },

      chosenColor: {
        type: String,
        default: '#20a0ff'
      },

      texts: {
        type: Array,
        default: () => ['极差', '失望', '一般', '满意', '惊喜']
      },

      showText: Boolean
    },
    data () {
      return {

        // 列表
        list: [],

        // 临时下标
        tempIdx: -1
      };
    },
    computed: {
      tempText () {
        return this.texts[this.tempIdx >= 0 ? this.tempIdx : this.value - 1];
      }
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal) return;
        this.initState();
      }
    },
    methods: {

      /**
       * 判断状态
       * @param item
       * @param index
       * @return {boolean}
       */
      judgeStatus(item, index) {
        if (this.tempIdx >= 0) return this.tempIdx >= index;
        else return item !== 0
      },

      /**
       * 鼠标移入
       * @param index
       */
      handleMouseEnter (index) {
        this.tempIdx = index;
      },

      /**
       * 鼠标移出
       */
      handleMouseLeave () {
        this.tempIdx = -1;
      },

      handleClick (index) {
        for (let i = 0; i <= index; i++) this.list[i] = 1;
        this.$emit('input', index + 1)
      },

      /**
       * 初始化数据状态
       */
      initState () {
        this.list = [];
        for (let i = 1; i <= this.max; i++) this.list.push(this.value >= i ? 1 : 0);
      }
    },
    created () {
      this.initState();
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-rate {

    &-item {
      font-size: 18px;
      line-height: 24px;
      padding-right: 6px;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      transition: transform .3s ease, color .3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>