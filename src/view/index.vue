<template>
  <div class="page page-index">

    <img v-for="(item, index) in imgs" :src="item" :key="index">

    <s-panel title="MTA漏斗模型测试">
      <s-button type="primary" @click="mtaDemo('one')">ONE</s-button>
      <s-button type="primary" @click="mtaDemo('two')">TWO</s-button>
      <s-button type="primary" @click="mtaDemo('three')">THREE</s-button>
      <s-button type="primary" @click="mtaDemo('four')">FOUR</s-button>
    </s-panel>

    <select>
      <option value="one">一 <span style="float: right">one</span></option>
    </select>

  </div>

</template>

<script>
  // import lazyimg from '../directives/lazyimg'

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

    }
  }

  function * demoGenerator () {
    yield 'hello'
    yield 'world'
    return 'ending'
  }

  const hw = demoGenerator()

  console.log('hw.next() =>', hw.next())
  console.log('hw.next() =>', hw.next())
  console.log('hw.next() =>', hw.next())
  console.log('hw.next() =>', hw.next())

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

<style lang="scss">
</style>
