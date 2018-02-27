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
            @click="handleNavItem(item)"><template v-if="navNumber">{{itemIndex + 1}}</template></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
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
        return this.$children.length;
      },
      
      navClasses () {
        return {
          [`s-carousel-nav-switch`]: !!this.navSwitch
        }
      }
    },
    data () {
      return {

        // 当前导航下标
        index: this.value,

        // 轮播列表
        list: [],

        timer: null,

        listStyles: {}
      }
    },
    methods: {
      /**
       * 新增一个子元素
       * @param _uid 子元素uid
       */
      add (_uid) {
        this.list.push(_uid);
        if (this.index === -1) this.init();
      },

      /**
       * 移除一个子元素
       * @param _uid
       */
      remove (_uid) {
        const index = this.list.findIndex(item => item === _uid);

        this.list.splice(index, 1);
        if (this.list.length <= 0) {

        }
      },

      /**
       * 导航切换
       * @param item
       */
      handleNavItem (item) {
        if (!this.navSwitch) return;
      },

      /**
       * 开始轮播
       */
      start () {

        // 判断是否为整数, 并且大于等于0
        if (!Number.isInteger(this.duration) || this.duration <= 0) return;
        this.timer = setInterval(() => {

        }, this.duration)
      },

      /**
       * 结束轮播
       */
      end () {
        clearInterval(this.timer);
      },

      /**
       * 切换
       * @param index
       */
      toggle (index) {

      }
    },
    mounted () {
      console.log(this);
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";

  .s-carousel {
    position: relative;
    overflow: hidden;

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
        background-color: rgba(255,255,255,.5);
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
    }

    &-slide {

      .s-carousel {

        &-list {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          box-sizing: content-box;
          
        }
        
        &-item {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          position: relative;
          text-align: center;
          font-size: 18px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

    }

  }
</style>