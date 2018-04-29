<!--
 - query-headers
 -
 - @author: Storm
 - @date: 2018/04/03
 -->
<template>
  <div class="page">
    <s-panel>
      <template slot="title">
        Headers 头部属性
        <small>参考文档: <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers">MDN</a></small>
      </template>
      <s-input v-model="filterKey" block placeholder="请输入关键字"></s-input>
      <s-table class="mt-20">
        <tr slot="head">
          <th>属性名称</th>
          <th>说明</th>
          <th>默认值</th>
          <th>父节点</th>
          <th>备注</th>
        </tr>
        <tr v-for="(item, index) in filterList" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.explain}}</td>
          <td>{{item.defVal}}</td>
          <td>{{item.parentNode}}</td>
          <td>{{item.remark}}</td>
        </tr>
      </s-table>
    </s-panel>
  </div>
</template>

<script>
  const list = [
    {
      name: 'Request URL',
      parentNode: 'General',
      explain: '请求地址',
      remark: '',
      defVal: ''
    },
    {
      name: 'Request Method',
      parentNode: 'General',
      explain: '请求方式',
      remark: '',
      defVal: 'GET, POST, PUT, DELETE, ...'
    },
    {
      name: 'Status Code',
      parentNode: 'General',
      explain: 'http状态码',
      remark: '',
      defVal: '200, 404, 500, 502, ...'
    },
    {
      name: 'Remote Address',
      parentNode: 'General',
      explain: '远程地址, 即IP地址',
      remark: '',
      defVal: ''
    },
    {
      name: 'Referrer Policy',
      parentNode: 'General',
      explain: '推荐策略',
      remark: '用于监管访问来源信息',
      defVal: 'no-referrer-when-downgrade'
    },
    {
      name: 'Accept-Ranges',
      parentNode: 'Response Headers',
      explain: '接受范围',
      remark: '用于标识请求自身支持范围',
      defVal: 'bytes'
    },
    {
      name: 'Connection',
      parentNode: 'Response Headers',
      explain: '连接',
      remark: '',
      defVal: 'keep-alive'
    },
    {
      name: 'Content-Length',
      parentNode: 'Response Headers',
      explain: '内容长度',
      remark: '',
      defVal: ''
    },
    {
      name: 'Content-Type',
      parentNode: 'Response Headers',
      explain: '内容类型',
      remark: '文件类型, 包括编码格式',
      defVal: 'text/html; charset=UTF-8'
    },
    {
      name: 'Date',
      parentNode: 'Response Headers',
      explain: '响应时间',
      remark: '',
      defVal: ''
    }
  ];
  export default {
    name: 'vQueryHeaders',
    title: 'queryHeaders',
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
        const regexp = new RegExp(`${this.filterKey}`, 'i');
        return list.filter(item => regexp.test(item.name));
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>