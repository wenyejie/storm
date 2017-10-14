<template>
  <div class="home">
    <s-row :gutter="15">
      <s-col span="10">ONE</s-col>
      <s-col span="10">TWO</s-col>
      <s-col span="4">THREE</s-col>
    </s-row>

    <section>
      <h3>下面哪个城市位于广东</h3>
      <s-checkbox-group>
        <s-checkbox :trueValue="'guangzhou'">广州</s-checkbox>
        <s-checkbox :trueValue="'beijing'">北京</s-checkbox>
        <s-checkbox :trueValue="'shenzhen'">深圳</s-checkbox>
        <s-checkbox :trueValue="'shanghai'">上海</s-checkbox>
      </s-checkbox-group>
    </section>

  </div>

</template>

<script>
  import { sRow, sCol } from '../components/grid'
  import sCheckbox from '../components/checkbox'
  import sCheckboxGroup from '../components/checkboxGroup'

  export default {
    name: 'home',
    components: {
      sRow,
      sCol,
      sCheckbox,
      sCheckboxGroup
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        checkboxDemo: true
      }
    }
  }
</script>
