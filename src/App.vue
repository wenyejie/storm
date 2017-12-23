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
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"
                v-for="(item, index) in menuList"
                :class="{active: item.path === $route.path}"
                :key="index">
              <a href="javascript:;" @click="toggleNav(item)">
                <s-icon class="nav-icon" :type="item.icon"></s-icon>
                {{item.name}}
              </a>
              <transition nam="nav-sublist">
                <ul class="nav-sublist" v-show="item.hidden" v-if="item.children && item.children.length">
                  <li class="nav-subitem"
                      v-for="(subitem, subindex) in item.children"
                      :key="subindex">
                    <a href="javascript:;" @click="toggleNav(subitem)">
                      {{subitem.name}}
                    </a>
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

        // 打开子菜单
        this.$set(item, 'hidden', !item.hidden)
      }
    }
  }
</script>

<style lang="scss">

  /* app */
  .app {
    overflow: hidden;
  }
  /* /app */

  /* header */
  .header {
    background-color: #555c78;
    color: #fff;
    font-size: 16px;

    a {
      color: #fff;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    &-content {
      display: flex;
      height: 80px;
      align-items: center;
      justify-content: space-between;
    }

    &-left {
      width: 240px;
      padding: 0 30px;
    }

    &-title {
      font-size: 20px;
    }

    &-right {
      padding-right: 30px;
    }

    &-nav {
      display: flex;

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
      width: 160px;
      font-size: 36px;

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
  }
  /* /container */

  /* aside */
  .aside {
    width: 240px;
    background-color: #464c61;
  }
  .nav {

    a {
      display: block;
      line-height: 40px;
      font-size: 14px;
      color: #fff;
      padding-left: 24px;
      border-left: 6px solid transparent;

      &:hover,
      &:focus,
      &.active a {
        background-color: #687194;
        border-left-color: #20a0ff;
      }
    }



    &-item {

      & > a {
        font-size: 16px;
      }

    }

    &-subitem {
      a {
        padding-left: 57px;
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
    padding: 30px;
  }
  /* /main */

</style>
