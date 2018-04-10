<!--
 - carousel
 -
 - @author: Storm
 - @date: 2018/02/26
 -->
<template>
  <div class="s-carousel" :class="classes">
    <div class="s-carousel-content">
      <div class="s-carousel-list" :style="listStyles">
        <slot></slot>
      </div>
      <div class="s-carousel-nav" :class="navClasses" v-if="nav">
        <ul>
          <li v-for="(item, itemIndex) in list"
              :class="itemIndex === index ? 'on' : ''"
              @click="handleNav(itemIndex, item)">
            <template v-if="navNumber">{{itemIndex + 1}}</template>
          </li>
        </ul>
      </div>
      <div class="s-carousel-prev" @click="handlePrev">
        <s-icon type="back"></s-icon>
      </div>
      <div class="s-carousel-next" @click="handleNext">
        <s-icon type="right"></s-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sCarousel',
    props: {

      // 下标值
      value: {
        type: Number,
        default: 0,
      },

      // 切换方式
      effect: {
        type: String,
        default: 'slide'
      },

      // 是否有导航
      nav: {
        type: Boolean,
        default: true
      },

      // 是否有导航数字
      navNumber: Boolean,

      // 导航切换
      navSwitch: {
        type: Boolean,
        default: true
      },

      // 轮播时间间隔
      duration: {
        type: Number,
        default: 5000
      }
    },
    computed: {
      classes () {
        return {
          [`s-carousel-${this.effect}`]: !!this.effect
        }
      },
      length () {
        return this.$children.length
      },

      navClasses () {
        return {
          [`s-carousel-nav-switch`]: !!this.navSwitch
        }
      },

      listStyles () {
        const result = {}
        result['margin-left'] = this.index * -100 + '%'
        return result
      }
    },
    watch: {

      /**
       * 监听下标是否发生变化
       * @param val
       * @param oldVal
       */
      value (val, oldVal) {
        if (val === oldVal || val === this.index) return
        this.toggle(val)
      }
    },
    data () {
      return {

        // 当前导航下标
        index: this.value,

        uid: 0,

        // 轮播列表
        list: [],

        timer: null
      }
    },
    methods: {
      /**
       * 新增一个子元素
       * @param _uid 子元素uid
       */
      add (_uid) {
        this.list.push(_uid)
        if (this.index === -1) this.init()
      },

      /**
       * 移除一个子元素
       * @param _uid
       */
      remove (_uid) {
        const index = this.list.findIndex(item => item === _uid)

        this.list.splice(index, 1)
        if (this.list.length <= 0) {

        }
      },

      /**
       * 导航切换
       * @param index 下标
       * @param item 下标
       */
      handleNav (index, item) {
        if (!this.navSwitch) return
        this.toggle(index)
      },

      /**
       * 开始轮播
       */
      start () {

        // 判断是否为整数, 并且大于等于0
        if (!Number.isInteger(this.duration) || this.duration <= 0) return
        this.timer = setTimeout(this.handleNext, this.duration)
      },

      /**
       * 结束轮播
       */
      stop () {
        clearTimeout(this.timer)
      },

      /**
       * 点击上一页
       */
      handlePrev () {
        let index
        if (this.index <= 0) index = this.list.length - 1
        else index = this.index - 1
        this.toggle(index)
      },

      /**
       * 点击下一页
       */
      handleNext () {
        let index
        if (this.index >= this.list.length - 1) index = 0
        else index = this.index + 1
        this.toggle(index)
      },

      /**
       * 切换
       * @param index
       */
      toggle (index) {
        this.stop()
        this.index = index
        this.uid = this.list[index]
        this.$emit('input', this.index)
        this.start()
      }
    },
    mounted () {
      this.toggle(0)
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-carousel {
    position: relative;
    overflow: hidden;

    &-prev,
    &-next {
      position: absolute;
      top: 50%;
      z-index: 2;
      font-size: 30px;
      color: #fff;
      opacity: .75;
      cursor: pointer;
      border-radius: 3px;
      transition: all .3s ease-in-out;

      &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, .25);
      }
    }

    &-prev {
      left: 10px;
    }

    &-next {
      right: 10px;
    }

    &-nav {
      position: absolute;
      z-index: 2;
      bottom: 10px;
      width: 100%;
      left: 0;

      ul {
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li {
        width: 30px;
        height: 3px;
        background-color: rgba(255, 255, 255, .5);
        margin: 0 3px;
        transition: all .3s ease-in-out;
      }

      li.on,
      li:hover {
        background-color: #fff;
      }

      &-switch {
        li {
          cursor: pointer;
        }

        li.on {
          cursor: default;
        }
      }
    }

    &-list {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      box-sizing: content-box;
      transition: all .3s ease-in-out;
    }

    &-item {

    }

    &-slide {

      .s-carousel {

        &-item {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          position: relative;
          text-align: center;
          font-size: 18px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

    }

    &-fade {
      .s-carousel {
        &-item {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }

  }
</style>