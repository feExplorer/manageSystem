<template>
  <div class="data-icons">
    <el-row :span="24">
      <div v-for="(item,index) in data" :key="index">
        <el-col :span="span">
          <div class="item" :class="[{'item--easy':discount}]">
            <div class="item-icon" :style="{color:color}">
              <i class="icon iconfont" :class="item.icon"></i>
            </div>
            <div class="item-info">
              <span>{{item.title}}</span>
              <h3 :style="{color:color}"><hl-count-up :start="14" :end="item.count"/></h3>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import hlCountUp from '@/components/hl-count-up/index.vue'
export default {
  name: 'hl-data-icons',
  components: {
    hlCountUp
  },
  data() {
    return {
      span: this.option.span || 6,
      data: this.option.data,
      color: this.option.color || 'rgb(63, 161, 255)',
      discount: this.option.discount || false
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
