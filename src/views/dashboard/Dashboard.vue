<template>
  <div class="dashboard">
    dash board
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <!-- <img src="~examples/assets/images/hamburger.png" class="image"> -->
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ new Date() }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}
</style>
