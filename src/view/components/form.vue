<!--
 - tooltip
 -
 - @author: Storm
 - @date: 2018/04/29
 -->
<template>
  <div class="page page-tooltip">
    <s-panel title="Default 默认">
      <s-form v-model="loginV">
        <s-form-item label="账号">
          <s-input v-model="login.account"
                   required
                   title="账号"
                   name="account"
                   :minlength="2"
                   :maxlength="20"></s-input>
        </s-form-item>

        <s-form-item>
          <s-button type="primary">Submit</s-button>
        </s-form-item>
      </s-form>
      {{loginV}}
    </s-panel>
  </div>
</template>

<script>
  export default {
    name: 'vForm',
    title: 'form',
    data () {
      return {
        login: {
          account: '',
          password: ''
        },
        loginV: {
          account: {
            requiredMsg: '请填写账号'
          }
        }
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/variable.scss";
  .form-label {
    line-height: 36px;
    text-align: right;
  }
  .form-item {
    margin-bottom: 15px;
  }
  /*[name="name"] {
    &:valid {
      background-color: $success;
      border-color: $success;
    }

    &:invalid {
      background-color: $danger;
      border-color: $danger;
    }
  }*/
</style>