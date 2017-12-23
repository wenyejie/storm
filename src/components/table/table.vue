<!--
 - table
 -
 - @author: Storm
 - @date: 2017/12/23
 -->
<template>
  <div class="s-table">
    <table>

    </table>
  </div>
</template>

<script>
  export default {
    name: 'sTable',
    props: {

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
  .s-table {

    &-block {
      display: block;
    }
  }
</style>