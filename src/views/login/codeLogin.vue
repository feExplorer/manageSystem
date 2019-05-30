<template>
  <el-form class="login-form" status-icon ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="phone" :rules="filter_rules({required:true,type:'mobile'})">
      <el-input
        v-only-number
        size="small"
        @keyup.enter.native="handleLogin"
        :change="handlePhonePureNumber(loginForm.phone)"
        v-model="loginForm.phone"
        auto-complete="off"
        placeholder="请输入手机号码"
        prefix-icon="el-icon-phone"
        :maxlength="11"
      ></el-input>
    </el-form-item>
    <el-form-item prop="code" :rules="filter_rules({required:true,type:'code'})">
      <el-input
        size="small"
        @keyup.enter.native="handleLogin"
        :change="handleCodePureNumber(loginForm.code)"
        v-model="loginForm.code"
        auto-complete="off"
        placeholder="请输入验证码"
        prefix-icon="el-icon-lock"
        :maxlength="4"
      >
        <template slot="append">
          <span @click="handleSend" class="msg-text" :class="[{display:msgKey}]">{{msgText}}</span>
        </template>
      </el-input>
    </el-form-item>
    <div style="height:22px;"></div>
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
import { formatPureNumberStr } from "@/utils/formatString.js";
const MSGINIT = "发送验证码";
// const MSGERROR = '验证码发送失败'
const MSGSCUCCESS = "${time}秒后重发";
const MSGTIME = 60;

export default {
  name: "codelogin",
  data() {
    return {
      msgText: MSGINIT,
      msgTime: MSGTIME,
      msgKey: false,
      loginForm: {
        phone: "17547400800",
        code: ""
      }
    };
  },
  created() {},
  mounted() {},
  computed: {},
  props: [],
  methods: {
    handlePhonePureNumber(val) {
      this.loginForm.phone = formatPureNumberStr(val);
    },
    handleCodePureNumber(val) {
      this.loginForm.code = formatPureNumberStr(val);
    },
    handleSend() {
      if (this.msgKey) return;
      this.msgText = MSGSCUCCESS.replace("${time}", this.msgTime);
      this.msgKey = true;
      const time = setInterval(() => {
        this.msgTime--;
        this.msgText = MSGSCUCCESS.replace("${time}", this.msgTime);
        if (this.msgTime === 0) {
          this.msgTime = MSGTIME;
          this.msgText = MSGINIT;
          this.msgKey = false;
          clearInterval(time);
        }
      }, 1000);
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log("验证码登录");
        } else {
          console.log("验证码登录--请检查信息");
        }
      });
    }
  }
};
</script>

<style>
.yanzhengma {
  display: block;
  margin-top: 8px;
}
.msg-text {
  display: block;
  width: 60px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}
.msg-text.display {
  color: #ccc;
}
</style>
