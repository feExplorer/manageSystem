<template>
  <div class="container-component" :class="{responsive}">
    <!-- [card] 卡片容器 -->
    <el-card v-if="type === 'card'" shadow="never" class="hl-container-card">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
    </el-card>
    <!-- [ghost] 隐形的容器 -->
    <div v-if="type === 'ghost'" class="hl-container-ghost">
      <el-card v-if="$slots.header" shadow="never" class="hl-container-ghost-header">
        <slot name="header"/>
      </el-card>
      <slot/>
    </div>
    <!-- [container-full] 填充 -->
    <hl-container-full v-if="type === 'full' && !scroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </hl-container-full>
    <!-- [container-full-bs] 填充 滚动优化 -->
    <hl-container-full-bs v-if="type === 'full' && scroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </hl-container-full-bs>
  </div>
</template>
<script>
// 组件
import hlContainerFull from "./components/hl-container-full.vue";
import hlContainerFullBs from "./components/hl-container-full-bs.vue";
export default {
  name: "hl-container",
  props: {
    // 容器样式
    type: {
      type: String,
      required: false,
      default: "card"
    },
    // 滚动优化
    scroll: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否开启响应式尺寸变化
    responsive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    hlContainerFull,
    hlContainerFullBs
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/public.scss";
.container-component {
  height: calc(100vh - 85px);
}
@media (min-width: 576px) {
  // 根据你的需要在这里添加样式
}
@media (min-width: 768px) {
  // 根据你的需要在这里添加样式
}
@media (min-width: 992px) {
  // 根据你的需要在这里添加样式
}
// 在大于1920分辨率的时候
@media (min-width: 1921px) {
  .container-component.responsive {
    margin: 0px auto;
    margin-bottom: 20px;
    max-width: 1920px - 200px;
  }
}
</style>