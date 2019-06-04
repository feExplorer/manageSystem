<template>
  <el-form
    class="login-form"
    :status-icon="false"
    ref="loginForm"
    :model="loginForm"
    label-width="0"
  >
    <el-form-item prop="username" :rules="filter_rules({required:true,type:'account'})">
      <el-input
        size="small"
        @keyup.enter.native="handleLogin"
        v-model="loginForm.username"
        auto-complete="off"
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
      ></el-input>
    </el-form-item>
    <el-form-item
      prop="password"
      :rules="filter_rules({required:true,type:'password',min:6,max:18})"
    >
      <el-input
        size="small"
        @keyup.enter.native="handleLogin"
        :type="passwordType"
        v-model="loginForm.password"
        auto-complete="off"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
      >
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
      </el-input>
    </el-form-item>
    <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button
        type="primary"
        size="middle"
        round
        @click.native.prevent="handleLogin"
        class="login-submit"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "userlogin",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      checked: false,
      code: {
        src: "",
        value: "",
        len: 4,
        type: "text"
      },
      passwordType: "password"
    };
  },
  created() {},
  mounted() {},
  computed: {},
  props: [],
  methods: {
    showPassword() {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log("账号密码登录");
          this.$router.push({ path: "/dashboard/dashboard" });
        } else {
          console.log("账号密码登录--请检查信息");
        }
      });
    }
  }
};
</script>
