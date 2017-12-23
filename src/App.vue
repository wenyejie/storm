<template>
  <div id="app" class="app">
    <header class="header">
      <div class="header-content">
        <div class="header-left">
          <router-link class="header-logo" to="/">Storm</router-link>
        </div>
        <!--<div class="header-center">
          <div class="header-title">交易虎大卖家管理后台</div>
        </div>-->
        <div class="header-right">
          <ul class="header-nav">
            <li><a href="javascript:;">个人中心</a></li>
            <li><a href="javascript:;">Storm (13480298192)</a></li>
            <li><a href="javascript:;">注销</a></li>
          </ul>
        </div>
      </div>
    </header>
    <div class="container">
      <aside class="aside">
        <h3>基础组件</h3>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"
                v-for="(item, index) in menuList"
                :class="{active: item.path === $route.path}"
                :key="index">
              <h4 @click="toggleNav(item)">{{item.name}}</h4>
              <transition nam="nav-sublist">
                <ul class="nav-sublist" v-show="!item.hidden" v-if="item.children && item.children.length">
                  <li class="nav-subitem"
                      v-for="(subitem, subindex) in item.children"
                      :key="subindex">
                    <a href="javascript:;" @click="toggleNav(subitem)">{{subitem.name}}</a>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
  import menuList from './datas/data.menuList'

  export default {
    name: 'app',
    data () {
      return {

        // 菜单列表
        menuList
      }
    },
    methods: {

      /**
       * 切换导航
       * @param item
       */
      toggleNav (item) {

        // 判断是否有跳转路径
        if (item.path) { // 有, 跳转

          if (item.newTab) {
            window.open(item.path, item.path)
          } else {
            this.$router.push(item.path)
          }
        }

        if (item.children) {

          // 打开子菜单
          this.$set(item, 'hidden', !item.hidden)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./styles/variable";

  /* app */
  .app {
    overflow: hidden;
  }
  /* /app */

  /* header */
  .header {
    color: #fff;
    background-color: #20a0ff;
    font-size: 16px;

    a {
      color: #fff;
    }

    &-content {
      display: flex;
      height: 80px;
      align-items: center;
      justify-content: space-between;
      width: 1200px;
      margin: 0 auto;
    }

    &-left {
    }

    &-title {
      font-size: 20px;
    }

    &-right {
      padding-right: 30px;
    }

    &-nav {
      display: flex;

      a {
        opacity: .8;

        &:hover,
        &:focus {
          opacity: 1;
        }
      }

      & > li {
        & + li {
          margin-left: 30px;
        }
      }
    }

    &-logo {
      display: block;
      margin-right: auto;
      text-align: center;
      font-size: 36px;
      font-weight: bold;

      img {
        display: block;
        width: 160px;
      }
    }
  }
  /* /header */

  /* container */
  .container {
    display: flex;
    min-height: calc(100vh - 80px);
    width: 1200px;
    margin: 55px auto 95px;
    border-radius: 6px;
  }
  /* /container */

  /* aside */
  .aside {
    width: 240px;
  }
  .nav {

    h3, a {
      line-height: 40px;
      height: 40px;
      display: block;
    }

    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 12px;
      color: #99a9bf;
      padding-left: 8px;
      line-height: 26px;
      margin-top: 10px;
    }

    a {
      font-size: 13px;
      padding-left: 24px;

      &:hover,
      &:focus,
      &.active a {
        color: $primary;
      }
    }

    &-item {

      & > a {
      }

    }

    &-subitem {
      a {
      }
    }

    &-icon {
      margin-right: 10px;
      font-size: 18px;
    }
  }
  /* /aside */

  /* main */
  .main {
    display: block;
    flex: 1;
    margin-left: 30px;
  }
  /* /main */

</style>
