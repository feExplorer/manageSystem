<template>
  <div>
    <template v-for="item in routes">
      <div v-if="!item.hidden&&item.children" :key="item.name">
        <router-link
          v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow"
          :to="item.path+'/'+item.children[0].path"
          :key="item.children[0].name"
        >
          <el-menu-item :index="item.path+'/'+item.children[0].path">
            <i :class="item.children[0].meta.icon"></i>
            <span
              v-if="item.children[0].meta&&item.children[0].meta.title"
              slot="title"
            >{{item.children[0].meta.title}}</span>
          </el-menu-item>
        </router-link>
        <el-submenu v-else :index="item.name||item.path" :key="item.name">
          <template slot="title">
            <i v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
            <span
              v-if="item.meta&&item.meta.title&&
          !sidebarState"
              slot="title"
            >{{item.meta.title}}</span>
          </template>

          <template v-for="child in item.children">
            <sidebar-item
              :is-nest="true"
              class="nest-menu"
              v-if="!child.hidden&&child.children&&child.children.length>0"
              :routes="[child]"
              :key="child.path"
            ></sidebar-item>

            <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
              <el-menu-item :index="item.path+'/'+child.path">
                <i v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></i>
                <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebarState"])
  },
  mounted() {
    console.log(this.routes);
  },
  methods: {
    hasOneShowingChildren(children) {
      console.log(children);
      const showingChildren = children.filter(item => {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    }
  }
};
</script>
