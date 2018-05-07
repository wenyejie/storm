<!--
 - table
 -
 - @author: Storm
 - @date: 2017/12/23
 -->
<template>
  <div class="s-table" :class="classes">
    <table>
      <colgroup v-if="$slots.colgroup"><slot name="colgroup"></slot></colgroup>
      <caption v-if="$slots.caption || title"><slot name="title">{{title}}</slot></caption>
      <thead v-if="$slots.head"><slot name="head"></slot></thead>
      <tbody v-if="$slots.default"><slot></slot></tbody>
      <tfoot v-if="$slots.foot"><slot name="foot"></slot></tfoot>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'sTable',
    props: {

      // 标题
      title: String,

      // 是否占满全屏
      block: {
        type: Boolean,
        default: true
      },

      // 是否有边框
      border: Boolean,

      // 是否展示hover效果
      hover: {
        type: Boolean,
        default: true
      },

      // 是否展示条纹
      stripe: Boolean
    },
    computed: {
      classes () {
        return {
          [`s-table-block`]: !!this.block,
          [`s-table-hover`]: !!this.hover,
          [`s-table-stripe`]: !!this.stripe
        }
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-table {

    color: $default;

    caption {
      padding: 7px 0;
      text-align: left;
      font-size: 22px;
      font-weight: 400;
    }

    td,
    th {
      padding: 7px 15px;
      text-overflow: ellipsis;
      vertical-align: middle;
      border: 1px solid #dfe6ec;
      transition: all .15s ease-in-out;
    }

    th {
      text-align: left;
      white-space: nowrap;
      background-color: #eef1f6;
      font-weight: bold;
    }

    &-block {

      table {
        width: 100%;
      }
    }

    &-hover {
      tr:hover > td {
        background-color: #eef1f6;
      }
    }

    &-stripe {
      /*tr:nth-child(2n - 1) > td {
        background-color: #fff;
      }*/
      tr:nth-child(2n) > td {
        background-color: #fafafa;
      }
    }
  }
</style>