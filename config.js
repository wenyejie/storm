/**
 * config.js 配置文件
 *
 * @author: Storm
 * @date: 2018/05/16
 */


module.exports = {

  // 服务端口
  port: 8088,

  // LRU缓存地址
  lru_cache_base_dir: '/User/wenyejie/Github/storm/dist',

  // 日志文件根地址
  log_dir: '../../log',

  // cluster集群最大子进程数, 0自动根据cup核数来
  cluster_child_max_process_number: 0
};