<!--
 -
 -
 - @author: Storm
 - @date: 2018/08/28
 -->
<template>
  <span class="s-countdown">{{innerHtml}}</span>
</template>

<script>
  import zeroize from '../../filters/zeroize';
  import isValidDate from '../../utils/isValidDate';

  export default {
    name: 'sCountdown',
    props: {

      // 倒计时格式化
      format: {
        type: String,
        default: 'hh:mm:ss'
      },

      // 起始时间
      startDate: {
        type: Date,
        default () {
          return new Date();
        },
        validator: isValidDate
      },

      // 结束时间
      endDate: {
        type: Date,
        required: true,
        validator: isValidDate
      },

      // 延时时间
      delay: {
        type: Number,
        default: 1000,
        validator: (val) => {
          return Number.isInteger(val) && val >= 50;
        }
      }
    },
    data () {
      return {
        timestamp: 0,
        dd: 0,
        hh: 0,
        mm: 0,
        ss: 0,
        ms: 0
      };
    },
    computed: {
      innerHtml () {
        return this.format.replace(/\b(d{1,2}|h{1,2}|m{1,2}|s{1,2}|ms|mss)\b/g, str => {
          switch (str) {
            case 'dd':
              return zeroize(this.dd);
            case 'd':
              return this.dd;
            case 'hh':
              return zeroize(this.hh);
            case 'h':
              return this.hh;
            case 'mm':
              return zeroize(this.mm);
            case 'm':
              return this.mm;
            case 'ss':
              return zeroize(this.ss);
            case 's':
              return this.ss;
            case 'mss':
              return zeroize(this.ms, 3);
            case 'ms':
              return this.ms;
          }
        });
      }
    },
    methods: {

      // 循环
      start () {

        // 剩余时间
        const leftTime = this.endDate - this.timestamp;
        if (leftTime >= 0) {
          this.dd = Math.floor(leftTime / 864e5);
          this.hh = Math.floor(leftTime / 36e5 % 24);
          this.mm = Math.floor(leftTime / 6e4 % 60);
          this.ss = Math.floor(leftTime / 1e3 % 60);
          this.ms = Math.floor(leftTime % 1e3);
        } else {

          // 倒计时结束
          this.stop();
          this.$emit('done');
        }

        this.timestamp += this.delay;
      },

      // 停止
      stop () {
        clearInterval(this.timer);
      }
    },
    created () {

      this.timestamp = this.startDate.getTime();

      this.start();

      this.timer = setInterval(this.start, this.delay);
    },
    beforeDestroy () {
      this.stop();
    }
  };
</script>

<style lang="scss">
  .s-countdown {

  }
</style>
