<template>
  <div class="page page-index">

    <img v-for="(item, index) in imgs" :src="item" :key="index">

    <s-panel title="MTA漏斗模型测试">
      <s-button type="primary" @click="mtaDemo('one')">ONE</s-button>
      <s-button type="primary" @click="mtaDemo('two')">TWO</s-button>
      <s-button type="primary" @click="mtaDemo('three')">THREE</s-button>
      <s-button type="primary" @click="mtaDemo('four')">FOUR</s-button>
    </s-panel>

    <s-panel title="Triangle 三角形测试">
      <div class="triangle">
        <div class="triangle-top"></div>
        <div class="triangle-bottom"></div>
        <div class="triangle-right"></div>
        <div class="triangle-left"></div>
      </div>
    </s-panel>

    <s-panel title="Ellipsis 省略...">
      <div class="ellipsis">ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis</div>
    </s-panel>

    <s-panel title="Details 详情">
      <details>
        <summary>Please fuck me!</summary>
        <div>哈哈</div>
        <div>YES!</div>
      </details>
    </s-panel>

    <s-panel title="filter:drop-shadow 滤镜" id="filter-drop-shadow">
      <div style="background-color: red; padding: 10px">
        <div class="one"></div>
      </div>
    </s-panel>

  </div>

</template>

<script>
  // import lazyimg from '../directives/lazyimg'
  import random from '../utils/random'
  import visibilityChange from '../core/visibilityChange'

  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        imgs: []
      }
    },
    methods: {

      /**
       * mta漏斗模型统计
       *
       * @param eventName 事件名称
       */
      mtaDemo (eventName) {
        window.MtaH5.clickStat('demo', {[`${eventName}`]: 'true'})
      }
    },
    created () {
      const worker = new Worker('/workers/demo.js')
      worker.onmessage = function (e) {
        console.log(e.data)
      }
      worker.postMessage({addend: 1000, augend: 1002})

      visibilityChange.add((visibility) => {
        console.log(visibility)
      })
    }
  }

  /*function * demoGenerator () {
    yield 'hello'
    yield 'world'
    return 'ending'
  }

  const hw = demoGenerator()*/

  // console.log('hw.next() =>', hw.next())
  // console.log('hw.next() =>', hw.next())
  // console.log('hw.next() =>', hw.next())
  // console.log('hw.next() =>', hw.next())

  /* async await demo
  const start = async () => {
    console.log('start....')
    await sleep(3000)
    console.log('end...');
    return 'fuck me';
  }
  start().then(r => {
    console.log(r);
  }, j => {
    console.log(j)
  });
  */
</script>

<style lang="scss" scoped>
  @import "../styles/variable";
  .triangle {
    display: flex;
  }
  .triangle-top {
    @include triangle-top(#000, 100px, 100px, 100px);
  }
  .triangle-bottom {
    @include triangle-bottom(#000, 100px, 100px, 100px);
  }
  .triangle-right {
    @include triangle-right(#000, 100px, 100px, 100px);
  }
  .triangle-left {
    @include triangle-left(#000, 100px, 100px, 100px);
  }
  .ellipsis {
    @include text-ellipsis;
    width: 300px;
  }
  .one {

    background-color: #ffe133;
    width: 80px;
    height: 80px;
    border-radius: 100%;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      background: transparent url("data:image/png;base64,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") no-repeat center;
      background-size: 80px 80px;
      filter: drop-shadow(0 4px 15px #ff9733);
    }
  }
</style>
