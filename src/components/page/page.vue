<!--
 - page
 -
 - @author: Storm
 - @date: 2018/03/16
 -->
<template>
  <div class="s-page" :class="classes">
    <ul>
      <li v-if="hasInfo"
          class="s-page-info">
        <template v-if="totalSize">共{{totalSize}}条;&nbsp;</template>
        <template v-if="innerPageSize">每页{{innerPageSize}}条;&nbsp;</template>
        第{{current + 1}}页; 共{{totalPage}}页;
      </li>
      <li v-if="hasFirst"
          class="s-page-item"
          @click="togglePage(0)"
          :class="{disabled: current === 0}">{{firstText}}
      </li>
      <li v-if="hasPrev"
          class="s-page-item"
          @click="togglePage(current - 1)"
          :class="{disabled: current === 0}">{{prevText}}
      </li>
      <li v-if="hasPrevSizer"
          @click="handleSizer(1)"
          class="s-page-sizer s-page-item">&hellip;
      </li>
      <li v-for="item in list"
          v-if="hasItem"
          class="s-page-item"
          @click.prevent="togglePage(item)"
          :class="{disabled: current === item, active: current === item}"
          :key="item">{{item + 1}}
      </li>
      <li v-if="hasNextSizer"
          @click="handleSizer(2)"
          class="s-page-sizer s-page-item">&hellip;
      </li>
      <li v-if="hasNext"
          class="s-page-item"
          @click="togglePage(current + 1)"
          :class="{disabled: current === totalPage - 1}">{{nextText}}
      </li>
      <li v-if="hasLast"
          class="s-page-item"
          @click="togglePage(totalPage - 1)"
          :class="{disabled: current === totalPage - 1}">{{lastText}}
      </li>
      <li v-if="pageSize" class="s-page-size">
        <s-select size="xs"
                  v-model="innerPageSize"
                  @change="handlePageSize">
          <option :value="10">10 条/页</option>
          <option :value="20">20 条/页</option>
          <option :value="30">30 条/页</option>
          <option :value="50">50 条/页</option>
          <option :value="100">100 条/页</option>
          <option :value="200">200 条/页</option>
        </s-select>
      </li>
      <li v-if="hasElevator"
          class="s-page-elevator">
        跳至<input type="number"
                 :max="totalPage"
                 :min="1"
                 :step="1"
                 @change="startElevator"
                 v-model.number="tier"/>页
      </li>
    </ul>
  </div>
</template>

<script>

  /**
   * 向上取整, 对按钮数的对半
   * @param num 按钮数
   * @return {number}
   */
  const countHalf = (num) => Math.ceil(num / 2)

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

  /**
   * 生成分页列表
   * @param current 当前页
   * @param total 总页数
   * @param number 按钮数量
   */
  const generateList = (current, total, number) => {

    // 起始页, 结束页
    let start = 0, end = total

    const half = countHalf(number)

    // 如果总页数低于按钮数
    if (total <= number) {
      end = total
    } else if (current < half) { // 按钮数的前几页
      end = number
    } else if (total <= current + half) { // 倒数几页
      start = total - number
    } else {// 默认情况
      start = current + 1 - half
      end = current + half
    }

    return countList(start, end)
  }

  /**
   * 数字验证规则
   * @param val
   * @return {boolean}
   */
  const validator = (val) => val >= 0

  export default {
    name: 'sPage',
    props: {

      // 当前页数
      value: {
        type: Number,
        required: true,
        default: 0,
        validator
      },

      // 总页数
      totalPage: {
        type: Number,
        required: true,
        validator
      },

      // 总条数
      totalSize: {
        type: Number,
        default: 0,
        validator
      },

      // 每页条数
      pageSize: {
        type: Number,
        default: 0,
        validator
      },

      // 按钮数量
      number: {
        type: Number,
        default: 5,
        validator
      },

      // 尺寸
      size: {
        type: String,
        validator (val) {
          return ['lg', 'sm', 'xs'].includes(val)
        }
      },

      // 禁用, 例如: 当正在加载时
      disabled: Boolean,

      // 是否有跳转功能
      hasElevator: Boolean,

      // 筛选器
      hasSizer: Boolean,

      // 是否有信息
      hasInfo: Boolean,

      // 是否有页码子项
      hasItem: {
        type: Boolean,
        default: true
      },

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
        if (val === oldVal) return
        this.current = val
        this.buildList()
      },

      // 监听按钮数是否发生变化
      number (val, oldVal) {
        if (val === oldVal) return
        this.half = countHalf(val)
        this.buildList()
      },

      // 监听总页数是否发生变化
      totalPage (val, oldVal) {
        if (val === oldVal) return
        this.buildList()
      },

      pageSize (val, oldVal) {
        if (val === oldVal) return
        this.innerPageSize = val
      }
    },
    computed: {

      // 是否显示上一个筛选器
      hasPrevSizer () {
        return this.hasSizer && (this.list[0]) > 0
      },

      // 是否显示下一个筛选器
      hasNextSizer () {
        return this.hasSizer && (this.list[this.number - 1]) < this.totalPage - 1
      },

      classes () {
        return {
          [`s-page-disabled`]: this.disabled,
          [`s-page-${this.size}`]: !!this.size
        }
      }
    },
    data () {
      return {

        // 展示分页列表
        list: [],

        // 当前页
        current: this.value,

        // 按钮数的对半向上取值
        half: countHalf(this.number),

        // 层级
        tier: 1,

        // 每页条数
        innerPageSize: this.pageSize
      }
    },
    methods: {

      /**
       * pageSize变更
       */
      handlePageSize () {
        if (this.disabled) return

        this.$emit('changePageSize', this.innerPageSize)
      },

      /**
       * 启动电梯
       */
      startElevator () {
        if (this.disabled) return

        this.tier = Math.ceil(this.tier)
        if (this.tier <= 0) {
          this.tier = 1
        } else if (this.tier > this.totalPage) {
          this.tier = this.totalPage
        }
        this.togglePage(this.tier - 1)
      },

      /**
       * 生成列表
       * @param opts 选项
       */
      buildList (opts = {}) {
        const {total, current, number} = Object.assign({
          total: this.totalPage,
          current: this.current,
          number: this.number
        }, opts)

        this.list = generateList(current, total, number)
      },

      /**
       * 切换筛选器
       * @param type 类型 1:prev, 2:next
       */
      handleSizer (type) {
        if (this.disabled) return

        // 起始值, 结束值
        let start = 0, end = this.totalPage
        if (type === 1) {
          end = this.list[0]
          start = this.list[0] - this.number
        } else if (type === 2) {
          start = this.list[this.number - 1] + 1
          end = start + this.number
          if (end >= this.totalPage) {
            end = this.totalPage
          }
        }

        this.list = countList(start, end)
      },

      /**
       * 点击切换页面
       */
      togglePage (page) {
        if (this.disabled) return

        // 如果页码小于0或者大于总页数, 或者等于当前页退出函数
        if (page < 0 || page >= this.totalPage || page === this.current) return false
        this.current = page

        this.$emit('input', page)
      }
    },
    created () {
      this.buildList()
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-page {
    font-family: Arial;

    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      margin-right: 10px;
    }

    &-item,
    &-elevator input {
      height: 28px;
      line-height: 26px;
      min-width: 28px;
      padding: 0 5px;
      text-align: center;
      border-radius: 3px;
      color: #666;
      border: 1px solid #dddee1;
    }

    &-item {
      cursor: pointer;
      transition: all .3s ease-in-out;

      &:not(.disabled):hover {
        border-color: $primary;
      }

      &.disabled {
        cursor: not-allowed;
        color: #ccc;
      }

      &.active {
        background-color: $primary;
        color: $white
      }
    }

    &-sizer {
      font-family: serif;
    }

    & &-elevator {
      border: none;
      padding: 0 0 0 5px;
    }

    &-elevator {
      input {
        margin: 0 10px;
        width: 38px;
      }
    }

    &-info {
      line-height: 28px;
    }

    &-disabled {
      cursor: not-allowed;
      position: relative;

      &:before {
        position: absolute;
        content: '';
        @include absolute-center;
        background-color: rgba(255, 255, 255, .5);
      }
    }
  }
</style>