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
    </s-panel>

    <s-panel title="Color">
      <s-icon type="loading" :size="18" color="red"></s-icon>
      <s-icon type="loading" :size="18" class="c-primary"></s-icon>
      <s-icon type="loading" :size="18" class="c-success"></s-icon>
      <s-icon type="loading" :size="18" class="c-danger"></s-icon>
      <s-icon type="loading" :size="18" class="c-info"></s-icon>
    </s-panel>

    <s-panel title="Type">
      <div class="grid">
        <div class="grid-item">
          <div>
            <s-icon type="favor"></s-icon>
          </div>
          <p>favor</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="favorfill"></s-icon>
          </div>
          <p>favorfill</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="check"></s-icon>
          </div>
          <p>check</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="close"></s-icon>
          </div>
          <p>close</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="loading"></s-icon>
          </div>
          <p>loading</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="roundcheckfill"></s-icon>
          </div>
          <p>roundcheckfill</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="roundcheck"></s-icon>
          </div>
          <p>roundcheck</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="roundclosefill"></s-icon>
          </div>
          <p>roundclosefill</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="roundclose"></s-icon>
          </div>
          <p>roundclose</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="timefill"></s-icon>
          </div>
          <p>timefill</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="time"></s-icon>
          </div>
          <p>time</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="back"></s-icon>
          </div>
          <p>back</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="right"></s-icon>
          </div>
          <p>right</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="add"></s-icon>
          </div>
          <p>add</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="fold"></s-icon>
          </div>
          <p>fold</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="infofill"></s-icon>
          </div>
          <p>infofill</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="info"></s-icon>
          </div>
          <p>info</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="radiobox"></s-icon>
          </div>
          <p>radiobox</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="radioboxfill"></s-icon>
          </div>
          <p>radioboxfill</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="warning"></s-icon>
          </div>
          <p>warning</p>
        </div>
        <div class="grid-item">
          <div>
            <s-icon type="warningfill"></s-icon>
          </div>
          <p>warningfill</p>
        </div>
      </div>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'icon',
    title: 'icon'
  }
</script>

<style lang="scss" scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    border: 1px solid #eee;
    font-size: 24px;

    &-item {
      width: 12.5%;
      border: 1px solid #eee;
      padding-bottom: 15px;

      div {
        height: 80px;
        position: relative;
      }
      p {
        font-size: 16px;
      }
    }

    .s-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
