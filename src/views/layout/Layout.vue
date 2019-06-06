<template>
  <div class="app-wrapper" :class="{'hideSidebar':sidebarState}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Navbar, Sidebar, AppMain, TagsView } from "./components";
export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  computed: {
    ...mapGetters(["sidebarState"])
  }
};
</script>
<style lang="scss">
@import "~@/styles/index.scss";
.app-wrapper {
  height: 100%;
  min-height: 100%;
  .sidebar-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    height: 100%;
    width: 200px;
    background: $sidebar-bg;
    transition: width 0.5s;
  }

  .main-container {
    min-height: 100%;
    margin-left: 210px;
    transition: margin-left 0.5s;
  }
}
.hideSidebar {
  .sidebar-container {
    width: 64px !important;
  }
  .main-container {
    margin-left: 74px;
  }
}
</style>
