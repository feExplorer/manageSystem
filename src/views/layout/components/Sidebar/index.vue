<template>
  <div class="sidebar-wrapper">
    <sidebar-logo></sidebar-logo>
    <div style="height:100%;width:220px;overflow-x:hidden">
      <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      mode="vertical"
      :collapse="sidebarState"
      background-color="#6959CD"
      text-color="white"
      active-text-color="#42b983"
    >
      <sidebar-item :routes="permissionRouters"></sidebar-item>
    </el-menu>
    </div>
  </div>
</template>
<script>
import SidebarLogo from "./Logo";
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
export default {
  components: {
    SidebarLogo,
    SidebarItem
  },
  computed: {
    ...mapGetters(["sidebarState", "permissionRouters"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/index.scss";
.sidebar-wrapper {
  height: 100%;
  width: 100%;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    background: $sidebar-bg;
  }
}
</style>
