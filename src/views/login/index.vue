<template>
  <div class="login-container">
    <div class="login-border">
      <div class="login-main">
        <h4 class="login-title">登录</h4>
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户密码" name="user">
            <userLogin></userLogin>
          </el-tab-pane>
          <el-tab-pane label="短信验证码" name="code">
            <codeLogin></codeLogin>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import userLogin from "./userLogin";
import codeLogin from "./codeLogin";
export default {
  name: "login",
  data() {
    return {
      activeName: "user"
    };
  },
  components: {
    userLogin,
    codeLogin
  }
};
</script>

<style lang="scss">
.login-container {
  .login-border {
    padding: 30px 50px 25px 50px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 1px 1px 2px #eee;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translate(0, -50%);
    .login-main {
      width: 270px;
      height: 350px;
      border-radius: 3px;
      box-sizing: border-box;
      background-color: #fff;
      .login-form {
        .login-submit {
          margin-top: 20px;
          width: 100%;
          border-radius: 28px;
        }
      }
    }
  }
}
.login-container::before {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/login/login.png");
  background-size: cover;
}
</style>
