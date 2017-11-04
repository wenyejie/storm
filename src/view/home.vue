<template>
  <div class="home">
    <s-row :gutter="15">
      <s-col span="10">ONE</s-col>
      <s-col span="10">TWO</s-col>
      <s-col span="4">THREE</s-col>
    </s-row>

    <section>
      <h3>请阅读购买协议</h3>
      <s-checkbox v-model="readed">已阅读</s-checkbox>
      {{readed}}
    </section>

    <section>
      <h3>下面哪个城市位于广东</h3>
      <s-checkbox-group v-model="guangdong">
        <s-checkbox value="guangzhou">广州</s-checkbox>
        <s-checkbox value="beijing">北京</s-checkbox>
        <s-checkbox value="shenzhen">深圳</s-checkbox>
        <s-checkbox value="shanghai">上海</s-checkbox>
        <s-checkbox value="xianggang">香港</s-checkbox>
      </s-checkbox-group>

      {{guangdong}}
    </section>

    <img data-src="//img.jiaoyihu.com/FnKOEbzjsXSiSye_f9VqEHnCg5C7" v-lazyimg />
    <img data-src="//img.jiaoyihu.com/FnKOEbzjsXSiSye_f9VqEHnCg5C7" v-lazyimg />
    <img data-src="//img.jiaoyihu.com/FnKOEbzjsXSiSye_f9VqEHnCg5C7" v-lazyimg />

  </div>

</template>

<script>
  import { sRow, sCol } from '../components/grid'
  import sCheckbox from '../components/checkbox'
  import sCheckboxGroup from '../components/checkboxGroup'
  import lazyimg from '../directives/lazyimg'

  console.log(lazyimg)

  export default {
    name: 'home',
    components: {
      sRow,
      sCol,
      sCheckbox,
      sCheckboxGroup
    },
    directives: {
      lazyimg
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        checkboxDemo: true,

        // 阅读协议
        readed: false,

        guangdong: ['guangzhou']
      }
    },
    created () {
    }
  }
</script>

<style lang="scss">
  .home {
    height: 2000px;

    img {
      width: 1000px;
      height: 625px;
      background-color: #eee;
    }
  }
</style>
