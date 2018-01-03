<!--
 - table
 -
 - @author: Storm
 - @date: 2017/12/23
 -->
<template>
  <div class="s-table" :class="classes">
    <table>
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
      title: String,
      block: {
        type: Boolean,
        default: true
      },
      border: Boolean
    },
    computed: {
      classes () {
        return {
          [`s-table-block`]: !!this.block
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
  @import "../../styles/variable";
  .s-table {

    color: $default;

    &-block {

      table {
        width: 100%;
      }
    }

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
    }

    th {
      text-align: left;
      white-space: nowrap;
      background-color: #eef1f6;
      font-weight: bold;
    }
  }
</style>