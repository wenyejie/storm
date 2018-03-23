<!--
 - page
 -
 - @author: Storm
 - @date: 2018/03/16
 -->
<template>
  <div class="s-page">
    <ul>
      <li v-if="hasFirst"
          @click="togglePage(0)"
          :class="{disabled: current === 0}">{{firstText}}
      </li>
      <li v-if="hasPrev"
          @click="togglePage(current - 1)"
          :class="{disabled: current === 0}">{{prevText}}
      </li>
      <li v-if="hasPrevSizer"
          @click="handlePrevSizer"
          class="s-page-sizer">&hellip;</li>
      <li v-for="item in list"
          @click.prevent="togglePage(item)"
          :class="{disabled: current === item, active: current === item}"
          :key="item">{{item + 1}}
      </li>
      <li v-if="hasNextSizer"
          @click="handleNextSizer"
          class="s-page-sizer">&hellip;</li>
      <li v-if="hasNext"
          @click="togglePage(current + 1)"
          :class="{disabled: current === total - 1}">{{nextText}}
      </li>
      <li v-if="hasLast"
          @click="togglePage(total - 1)"
          :class="{disabled: current === total - 1}">{{lastText}}
      </li>
    </ul>
  </div>
</template>

<script>

  // 向上取整, 对按钮数的对半
  const countHalf = (num) => Math.ceil(num / 2);

  /**
   * 根据参数起始值, 和结束值计算分页列表
   * @param start
   * @param end
   * @return {Array}
   */
  const countList = (start, end) => {
    const list = []
    for (; start < end; start++) {
      list.push(start)
    }
    return list
  }

  export default {
    name: 'sPage',
    props: {

      // 当前页数
      value: {
        type: Number,
        required: true,
        default: 0,
        validator (val) {
          return val >= 0;
        }
      },

      // 总页数
      total: {
        type: Number,
        required: true,
        validator (val) {
          return val >= 0;
        }
      },

      // 按钮数量
      number: {
        type: Number,
        default: 5,
        validator (val) {
          return val >= 0;
        }
      },

      // 筛选器
      hasSizer: Boolean,

      // 是否有下一页
      hasNext: {
        type: Boolean,
        default: true
      },

      // 是否有上一页
      hasPrev: {
        type: Boolean,
        default: true
      },

      // 下一页文本
      nextText: {
        type: String,
        default: '>'
      },

      // 上一页文本
      prevText: {
        type: String,
        default: '<'
      },

      // 是否有第一页
      hasFirst: {
        type: Boolean,
        default: true
      },

      // 第一页文本
      firstText: {
        type: String,
        default: '\u00AB'
      },

      // 是否有最后一页
      hasLast: {
        type: Boolean,
        default: true
      },

      // 最后一页文本
      lastText: {
        type: String,
        default: '\u00BB'
      },
    },
    watch: {

      // 监听value是否发生变化
      value (val, oldVal) {
        // 判断两个值是否等同
        if (val === oldVal || val === this.current) return
        this.current = val
      },

      // 监听按钮数是否发生变化
      number (val, oldVal) {
        if (val === oldVal) return;
        this.half = countHalf(val);
      }
    },
    computed: {

      // 是否显示上一个筛选器
      hasPrevSizer () {
        return this.hasSizer && (this.current - this.half) >= 0;
      },

      // 是否显示下一个筛选器
      hasNextSizer () {
        return this.hasSizer && (this.current + this.number) <= this.total;
      },

      /**
       * 计算分页数
       */
      list () {

        // 起始页, 结束页
        let start = 0, end = this.total

        // 当前页
        const current = this.current;

        // 如果总页数低于按钮数
        if (this.total <= this.number) {
          end = this.total;
        } else if (current < this.half) { // 按钮数的前几页
          end = this.number;
        } else if (this.total <= current + this.half) {// 倒数几页
          start = this.total - this.number;
        } else {
          start = current + 1 - this.half;
          end = current + this.half;
        }

        // 其它
        return countList(start, end);
      }
    },
    data () {
      return {

        // 当前页
        current: this.value,

        // 按钮数的对半
        half: countHalf(this.number),
      }
    },
    methods: {

      handlePrevSizer () {

      },

      handleNextSizer () {

      },

      /**
       * 点击切换页面
       */
      togglePage (page) {

        // 如果页码小于0或者大于总页数, 或者等于当前页退出函数
        if (page < 0 || page >= this.total || page === this.current) return false
        this.current = page

        this.$emit('input', page)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-page {
    font-family: Arial;

    ul {
      display: flex;
    }
    li {
      height: 28px;
      line-height: 26px;
      min-width: 28px;
      padding: 0 5px;
      text-align: center;
      border-radius: 3px;
      color: #666;
      border: 1px solid #dddee1;
      cursor: pointer;
      transition: all .3s ease-in-out;

      & + li {
        margin-left: 10px;
      }

      &:not(.disabled):hover {
        border-color: $primary;
      }

      &.disabled {
        cursor: not-allowed;
      }

      &.active {
        background-color: $primary;
        color: $white
      }
    }

    &-sizer {
      font-family: serif;
    }
  }
</style>