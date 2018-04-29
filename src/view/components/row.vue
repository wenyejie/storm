<!--
 - row
 -
 - @author: Storm
 - @date: 2018/04/29
 -->
<template>
  <div class="page page-row">

    <s-panel title="Default 默认">
      <s-row>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
      </s-row>
    </s-panel>

    <s-panel title="Justify 水平对齐">
      <s-row justify="left">
        <s-col span="4"><div class="demo">左对齐</div></s-col>
        <s-col span="4"><div class="demo">左对齐</div></s-col>
        <s-col span="4"><div class="demo">左对齐</div></s-col>
      </s-row>
      <s-row justify="center">
        <s-col span="4"><div class="demo">居中对齐</div></s-col>
        <s-col span="4"><div class="demo">居中对齐</div></s-col>
        <s-col span="4"><div class="demo">居中对齐</div></s-col>
      </s-row>
      <s-row justify="right">
        <s-col span="4"><div class="demo">右对齐</div></s-col>
        <s-col span="4"><div class="demo">右对齐</div></s-col>
        <s-col span="4"><div class="demo">右对齐</div></s-col>
      </s-row>
      <s-row justify="between">
        <s-col span="4"><div class="demo">两端对齐</div></s-col>
        <s-col span="4"><div class="demo">两端对齐</div></s-col>
        <s-col span="4"><div class="demo">两端对齐</div></s-col>
      </s-row>
      <s-row justify="around">
        <s-col span="4"><div class="demo">均匀对齐</div></s-col>
        <s-col span="4"><div class="demo">均匀对齐</div></s-col>
        <s-col span="4"><div class="demo">均匀对齐</div></s-col>
      </s-row>
    </s-panel>

    <s-panel title="align 垂直对齐">
      <s-row align="top">
        <s-col span="8"><div class="demo">起点对齐</div></s-col>
        <s-col span="8"><div class="demo">起点对齐</div></s-col>
        <s-col span="8"><div class="demo">起点对齐</div></s-col>
      </s-row>
      <s-row align="bottom">
        <s-col span="8"><div class="demo">居中对齐</div></s-col>
        <s-col span="8"><div class="demo">居中对齐</div></s-col>
        <s-col span="8"><div class="demo">居中对齐</div></s-col>
      </s-row>
      <s-row align="center">
        <s-col span="8"><div class="demo">终点对齐</div></s-col>
        <s-col span="8"><div class="demo">终点对齐</div></s-col>
        <s-col span="8"><div class="demo">终点对齐</div></s-col>
      </s-row>
      <s-row align="stretch">
        <s-col span="8"><div class="demo">拉伸对齐</div></s-col>
        <s-col span="8"><div class="demo">拉伸对齐</div></s-col>
        <s-col span="8"><div class="demo">拉伸对齐</div></s-col>
      </s-row>
    </s-panel>

    <s-panel title="wrap 换行">
      <s-row wrap>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
      </s-row>
    </s-panel>

    <s-panel title="gutter 间距">
      <s-row wrap :gutter="10">
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
        <s-col span="8"><div class="demo"></div></s-col>
      </s-row>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vRow',
    title: 'row'
  }
</script>

<style lang="scss" scoped>
  .demo {
    border-radius: 2px;
    margin: 2px;
    height: 30px;
    background-color: #eee;
    text-align: center;
    line-height: 30px;
    color: #aaa;
  }

  .s-row[class*="s-row-align"] {
    height: 90px;
    box-shadow: 0 0 1px 0 #aaa;
    margin: 5px 0;

    &.s-row-align-stretch {

      .demo {
        line-height: 90px;
        height: 100%;
      }
    }
  }
</style>