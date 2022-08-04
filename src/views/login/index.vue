<template>
  <div class="login-container">
    <div class="login-from">
      <img
        src="../../assets/logo.595745bd.png"
        alt=""
        class="BackgroundImage"
      />
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
        <el-form-item
          label-width="0px"
          class="yz-form-item"
          prop="checkingInput"
        >
          <el-input
            v-model="form.checkingInput"
            placeholder="请输入验证码"
            prefix-icon="el-icon-help"
            class="yzInput"
          />
        </el-form-item>
        <img :src="imgUrl" alt="" class="yzImg" @click="imgClick" />
        <el-form-item label-width="0px">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getVerificationCode } from "@/api/user";
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "admin",
        passwordInput: "admin",
        checkingInput: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
        passwordInput: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
        checkingInput: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      clientToken: new Date().getTime(), // 验证码随机数
      imgUrl: "",
    };
  },
  computed: {
    ...mapState("user", ["userLogin"]),
  },
  methods: {
    // 登录
     onSubmit() {
      this.$refs.form.validate(async(a) => {
        if (a) {
          await this.$store.dispatch("user/getToken", {
            loginName: this.form.name,
            password: this.form.passwordInput,
            clientToken: this.clientToken,
            code: this.form.checkingInput,
            loginType: 0,
          });
          this.$message.success("登陆成功");
          this.$router.push("/");
        }
      });
    },
    // 获取验证码
    async getVerificationCode() {
      try {
        const {data} = await getVerificationCode(this.clientToken);
        // console.log(res);
        this.imgUrl = window.URL.createObjectURL(data);
        // console.log(this.imgUrl);
      } catch (error) {
        console.log(error);
      }
    },
    imgClick() {
      this.getVerificationCode();
    },
  },
  created() {
    this.getVerificationCode();
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  background-image: url("../../assets/background.be4fae7d.png");
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
    .yzInput {
      width: 318px;
    }
    .yzImg {
      position: absolute;
      bottom: 113px;
      right: 35px;
    }
    ::v-deep .yz-form-item {
      height: 52px;
    }
    .el-button {
      width: 100%;
      height: 52px;
      background: linear-gradient(262deg, #2e50e1, #6878f0);
    }
    ::v-deep .el-input__icon {
      font-size: 16px;
    }
  }
  ::v-deep .el-input__inner {
    height: 52px;
  }
}
</style>
