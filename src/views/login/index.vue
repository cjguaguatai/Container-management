<template>
  <div class="login-container">
    <div class="login-from">
      <img
        src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
        alt=""
        class="BackgroundImage"
      >
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <!-- 用户名框 -->
        <el-form-item label-width="0px" prop="name">
          <el-input
            v-model="form.name"
            prefix-icon="el-icon-mobile-phone"
            placeholder="请输入账号"
          />
        </el-form-item>
        <!-- 密码框 -->
        <el-form-item label-width="0px" prop="passwordInput">
          <el-input
            v-model="form.passwordInput"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            :show-password="true"
          />
        </el-form-item>
        <!-- 验证码框 -->
        <el-form-item label-width="0px" class="yz-form-item" prop="checkingInput">
          <el-input
            v-model="form.checkingInput"
            placeholder="请输入验证码"
            prefix-icon="el-icon-help"
            class="yzInput"
          />
        </el-form-item>
        <img src="https://likede2-java.itheima.net/api/user-service/user/imageCode/z7BnTlT3GCbXl1imL8zT3qLKJd1EmoX4" alt="" class="yzImg">
        <el-form-item label-width="0px">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: 'admin',
        passwordInput: '',
        checkingInput: ''
      },

      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        passwordInput: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        checkingInput: [{ required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background-image: url("http://likede2-admin.itheima.net/img/background.be4fae7d.png");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  .login-from {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .BackgroundImage {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
    }
    .yzInput{
      width: 318px;
    }
    .yzImg{
      position: absolute;
      bottom: 113px;
      right: 35px;
    }
    ::v-deep .yz-form-item{
      height:52px ;
    }
    .el-button{
      width: 100%;
      height: 52px;
      background: linear-gradient(262deg,#2e50e1,#6878f0);
    }
    ::v-deep .el-input__icon{
      font-size: 16px;
    }
  }
  ::v-deep .el-input__inner{
      height: 52px ;
    }
}
</style>
