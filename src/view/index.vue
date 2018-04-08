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

  </div>

</template>

<script>
  // import lazyimg from '../directives/lazyimg'
  import random from '../utils/random';
  import visibilityChange from '../core/visibilityChange';

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
      worker.postMessage({addend: 1000, augend: 1002});

      visibilityChange.add((visibility) => {
        console.log(visibility);
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
</style>
