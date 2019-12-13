<template>
  <div class="contextmenu">
    <template slot="header">按钮组</template>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-group>
        <v-contextmenu-item>菜单1</v-contextmenu-item>
        <v-contextmenu-item>菜单2</v-contextmenu-item>
        <v-contextmenu-item>菜单3</v-contextmenu-item>
      </v-contextmenu-group>
      <v-contextmenu-item divider></v-contextmenu-item>
      <v-contextmenu-group>
        <v-contextmenu-item><i class="icon iconfont" :class="`icon-caidan`"></i></v-contextmenu-item>
        <v-contextmenu-item><i class="icon iconfont" :class="`icon-pdf`"></i></v-contextmenu-item>
        <v-contextmenu-item><i class="icon iconfont" :class="`icon-duoyuyan`"></i></v-contextmenu-item>
        <v-contextmenu-item><i class="icon iconfont" :class="`icon-xuanxiangqia`"></i></v-contextmenu-item>
      </v-contextmenu-group>
      <v-contextmenu-item divider></v-contextmenu-item>
      <v-contextmenu-item>菜单4</v-contextmenu-item>
      <v-contextmenu-item>菜单5</v-contextmenu-item>
    </v-contextmenu>
    <div class="contextmenu-pad" v-contextmenu:contextmenu>
      右键点击此区域
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
@import url("./pub.scss");
</style>
