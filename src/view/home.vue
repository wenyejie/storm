<template>
  <div class="home">
    <s-row :gutter="15">
      <s-col span="10">ONE</s-col>
      <s-col span="10">TWO</s-col>
      <s-col span="4">THREE</s-col>
    </s-row>

    <section>
      <h3>下面哪个城市位于广东</h3>
    <s-checkbox v-model="checkboxDemo">广州</s-checkbox>
    {{checkboxDemo}}
    </section>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      checkboxDemo: true
    }
  }
}
</script>
