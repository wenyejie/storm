<template>
  <div id="app" class="app">
    <header class="header">
      <div class="header-content">
        <div class="header-left">
          <a class="header-logo"><img src="http://img.la/160x50?s=Storm"></a>
        </div>
        <div class="header-center">
          <div class="header-title">交易虎大卖家管理后台</div>
        </div>
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
        <nav>
          <ul>
            <li class="nav-item"
                v-for="(item, index) in menuList"
                :class="{active: item.path === $route.path}"
                :key="index">
              <router-link :to="item.path"><s-icon class="nav-icon" :type="item.icon"></s-icon>{{item.name}}</router-link>
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
  export default {
    name: 'app',
    data () {
      return {

        // 菜单列表
        menuList: [
          {
            name: 'Dashboard',
            icon: 'time',
            path: '/'
          },
          {
            name: 'Row',
            icon: 'time',
            path: '/row'
          },
          {
            name: 'Col',
            icon: 'time',
            path: '/col'
          },
          {
            name: 'Panel',
            icon: 'time',
            path: '/panel'
          },
          {
            name: 'Checkbox',
            icon: 'time',
            path: '/checkbox'
          },
          {
            name: 'Radio',
            icon: 'time',
            path: '/radio'
          },
          {
            name: 'Icon',
            icon: 'time',
            path: '/icon'
          }
        ]
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
    }

    &-left {
      width: 240px;
      padding: 0 30px;
    }

    &-center {
      flex: 1;
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
    height: calc(100vh - 80px);
  }
  /* /container */

  /* aside */
  .aside {
    width: 240px;
    background-color: #464c61;
  }
  .nav {
    &-item {
      a {
        display: block;
        line-height: 60px;
        font-size: 16px;
        color: #fff;
        padding-left: 24px;
        border-left: 6px solid transparent;
      }

      & > a:hover,
      & > a:focus,
      &.active a {
        background-color: #687194;
        border-left-color: #20a0ff;
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
