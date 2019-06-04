<template>
  <div class="navbar">
    <el-button @click="change">open/close sidebar</el-button>
  </div>
</template>
<script>
export default {
  name: "navbar",
  methods: {
    change() {
      this.$store.state.sidebarState = !this.$store.state.sidebarState;
    }
  }
};
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
}
</style>
