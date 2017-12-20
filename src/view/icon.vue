<!--
 - icon
 -
 - @author: Storm
 - @date: 2017/12/20
 -->
<template>
  <div class="page page-icon">

    <s-panel title="Default">
      <s-icon type="check"></s-icon>
      <pre><code>&lt;s-icon type="check"&gt;&lt;/s-icon&gt;</code></pre>
    </s-panel>

    <s-panel title="Size">
      <s-icon type="loading" :size="14"></s-icon>
      <s-icon type="loading" :size="16"></s-icon>
      <s-icon type="loading" :size="18"></s-icon>
      <s-icon type="loading" :size="20"></s-icon>
      <s-icon type="loading" :size="22"></s-icon>
      <s-icon type="loading" :size="24"></s-icon>
      <s-icon type="loading" :size="26"></s-icon>
      <s-icon type="loading" :size="28"></s-icon>
      <pre><code>&lt;s-icon type="loading" :size="14"&gt;&lt;/s-icon&gt;
&lt;s-icon type="loading" :size="16"&gt;&lt;/s-icon&gt;
&lt;s-icon type="loading" :size="18"&gt;&lt;/s-icon&gt;
&lt;s-icon type="loading" :size="20"&gt;&lt;/s-icon&gt;</code></pre>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'icon'
  }
</script>

<style lang="scss" scoped>

</style>
