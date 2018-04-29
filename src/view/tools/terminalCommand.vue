<!--
 - 
 -
 - @author: Storm
 - @date: 2018/04/25
 -->
<template>
  <div class="page page-terminal-command">
    <s-panel title="terminal command">
      <s-input v-model="filterKey" block placeholder="请输入关键字"></s-input>
      <s-table class="mt-20">
        <tr slot="head">
          <th>命令</th>
          <th>描述</th>
          <th>例子</th>
        </tr>
        <tr v-for="(item, index) in filterList" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.desc}}</td>
          <td>{{item.example}}</td>
        </tr>
      </s-table>
    </s-panel>
  </div>
</template>

<script>
  const list = [
    {
      name: 'mkdir',
      desc: '创建目录',
      example: 'mkdir demo'
    },
    {
      name: 'rmdir',
      desc: '删除目录',
      example: 'rmdir demo'
    }
  ]
  export default {
    name: 'vTerminalCommand',
    data () {
      return {

        // 过滤关键字
        filterKey: ''
      }
    },
    computed: {

      /**
       * 对网络状态列表进行搜索
       * @return {*[]}
       */
      filterList () {
        const regexp = new RegExp(`${this.filterKey}`, 'i')
        return list.filter(item => regexp.test(item.name) || regexp.test(item.desc))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
