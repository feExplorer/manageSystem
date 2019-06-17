<template>
  <div class="hl-data-display">
    <el-row :span="24">
      <el-col v-for="(item,index) in data" :key="index" :span="span">
        <div class="item" :style="{color:color}">
          <div><h5 class="count"><hl-count-up :start="14" :end="item.count"/></h5>
          <span class="splitLine" />
          <p class="title">{{item.title}}</p></div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import hlCountUp from '@/components/hl-count-up/index.vue'
export default {
  name: 'hl-data-display',
  components: {
    hlCountUp
  },
  data() {
    return {
      span: this.option.span || 8,
      data: this.option.data,
      color: this.option.color || 'rgb(63, 161, 255)'
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  created() {},
  methods: {}
}
</script>
