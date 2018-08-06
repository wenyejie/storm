<!--
 - network-status
 -
 - @author: Storm
 - @date: 2018/03/26
 -->
<template>
  <div class="page">
    <s-panel title="net::ERR 网络::错误">
      <s-input v-model="filterKey" block placeholder="请输入关键字"></s-input>
      <s-table class="mt-20">
        <tr slot="head">
          <th>状态</th>
          <th>说明</th>
          <th>备注</th>
        </tr>
        <tr v-for="(item, index) in filterList" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.explain}}</td>
          <td>{{item.remark}}</td>
        </tr>
      </s-table>
    </s-panel>
  </div>
</template>

<script>

  // 网络状态列表
  const list = [
    {
      name: 'net::ERR_INTERNET_DISCONNECTED',
      explain: '网络错误::网络失去链接',
      remark: '要不服务器挂了, 要不就是你的挂了'
    },
    {
      name: 'net::ERR_CONNECTION_TIMED_OUT',
      explain: '网络错误::链接超时',
      remark: '超时了, 或者断开了链接'
    },
    {
      name: 'net::ERR_TIMED_OUT',
      explain: '网络错误::超时',
      remark: '超时了, 或者连不上'
    },
    {
      name: 'net::ERR_BLOCKED_BY_CLIENT',
      explain: '网络错误::被本地客户端阻止',
      remark: '如: AdBlock会阻止一些广告请求'
    },
    {
      name: 'net::ERR_INSECURE_RESPONSE',
      explain: '网络错误::不安全的响应',
      remark: '跨域, 或错误的https证书, 或者不被认可的https证书'
    },
    {
      name: 'net::ERR_PROXY_CONNECTION_FAILED',
      explain: '网络错误::代练服务器链接失败',
      remark: '代理服务器连接失败, 取消代理, 或者重新设置代练'
    },
    {
      name: 'net::ERR_CONNECTION_REFUSED',
      explain: '网络错误::连接被拒绝',
      remark: '服务器拒绝了你的连接'
    },
    {
      name: 'net::ERR_FAILED',
      explain: '网络错误::失败',
      remark: '底层tcp/ip协议解析有问题'
    },
    {
      name: 'net::ERR_INCOMPLETE_CHUNKED_ENCODING',
      explain: '网络错误::不完整的代码块',
      remark: '资源没加载完就断开了连接'
    },
    {
      name: 'net::ERR_ABORTED',
      explain: '网络错误::中止',
      remark: '请求失败或中止'
    },
    {
      name: 'net::ERR_CONNECTION_ABORTED',
      explain: '网络错误::连接终止',
      remark: '请求资源过大, 被迫终止'
    },
    {
      name: 'net::ERR_EMPTY_RESPONSE',
      explain: '网络错误::空的响应内容',
      remark: ''
    },
    {
      name: 'net::ERR_CERT_COMMON_NAME_INVALID',
      explain: '网络错误::证书不匹配',
      remark: '证书不对, Common Name 不匹配'
    },
    {
      name: 'net::ERR_CERT_AUTHORITY_INVALID',
      explain: '网络错误::证书检验失败',
      remark: '证书不对, 证书匹配, 但不被认可'
    },
    {
      name: 'net::ERR_FILE_NOT_FOUND',
      explain: '网络错误::文件找不到',
      remark: ''
    },
    {
      name: 'net::ERR_CACHE_MISS',
      explain: '网络错误::缓存丢失',
      remark: '网站本身设置了no-store无缓存，所以取不到. 不会产生什么影响'
    },
    {
      name: 'net::ERR_SSL_PROTOCOL_ERROR',
      explain: 'SSL协议错误',
      remark: '无法与服务器建议正常的SSL协议链接.'
    },
    {
      name: 'net::ERR_TOO_MANY_REDIRECTS',
      explain: '太多重定向了!',
      remark: ''
    },
    {
      name: 'net::ERR_CONNECTION_CLOSED',
      explain: '链接被关闭, VPN/翻墙工具失效!',
      remark: ''
    },
    {
      name: 'net::DNS_PROBE_POSSIBLE',
      explain: 'DNS无法解析',
      remark: ''
    },
    {
      name: 'net::DNS_PROBE_FINISHED_NXDOMAIN',
      explain: '找不到服务器IP地址',
      remark: ''
    },
    {
      name: 'net::ERR_CONNECTION_RESET',
      explain: '链接被重置',
      remark: ''
    }
  ];
  export default {
    name: 'vNetworkStatus',
    title: 'networkStatus',
    data () {
      return {

        // 过滤关键字
        filterKey: ''
      };
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
  };
</script>

<style lang="scss" scoped>
  .page {

  }
</style>