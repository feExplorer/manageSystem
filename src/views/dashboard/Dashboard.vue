<template>
  <div class="dashboard">
    <div class="item">
      <h4>数据展示</h4>
      <hl-data-display :option="option"></hl-data-display>
    </div>
    <div class="item">
      <h4>选项卡展示</h4>
      <hl-data-tab :option="easyDataOption"></hl-data-tab>
    </div>
    <div class="item">
      <h4>卡片的展示</h4>
      <hl-data-card :option="easyDataOption0"></hl-data-card>
    </div>
    <div class="item">
      <h4>带数字的展示</h4>
      <hl-data-icons :option="easyDataOption1"></hl-data-icons>
    </div>
  </div>
</template>
<script>
import hlDataDisplay from '@/components/hl-data-display/index'
import hlDataTab from '@/components/hl-data-tab/index'
import hlDataCard from '@/components/hl-data-card/index'
import hlDataIcons from '@/components/hl-data-icons/index'
export default {
  name: 'report',
  components: {
    hlDataDisplay,
    hlDataTab,
    hlDataCard,
    hlDataIcons
  },
  data() {
    return {
      option: {
        span: 8,
        color: '#15A0FF',
        data: [
          {
            count: 1000,
            title: '日活跃数'
          },
          {
            count: 3000,
            title: '月活跃数'
          },
          {
            count: 20000,
            title: '年活跃数'
          }
        ]
      },
      easyDataOption: {
        span: 6,
        data: [
          {
            title: '分类统计',
            subtitle: '实时',
            count: 7993,
            allcount: 10222,
            text: '当前分类总记录数',
            color: 'rgb(49, 180, 141)',
            key: '类'
          },
          {
            title: '附件统计',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '当前上传的附件数',
            color: 'rgb(56, 161, 242)',
            key: '附'
          },
          {
            title: '文章统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(117, 56, 199)',
            key: '评'
          },
          {
            title: '新闻统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(59, 103, 164)',
            key: '新'
          }
        ]
      },
      easyDataOption0: {
        span: 6,
        borderColor: '#fff',
        data: [
          {
            name: '姓名1',
            src: '/img/mock/card/card-1.jpg',
            text: '介绍1'
          },
          {
            name: '姓名2',
            src: '/img/mock/card/card-2.jpg',
            text: '介绍2'
          },
          {
            name: '姓名3',
            src: '/img/mock/card/card-3.jpg',
            text: '介绍3'
          },
          {
            name: '姓名4',
            src: '/img/mock/card/card-4.jpg',
            text: '介绍4'
          }
        ]
      },
      easyDataOption1: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        data: [
          {
            title: '今日注册',
            count: 12678,
            icon: 'icon-zhuce'
          },
          {
            title: '今日登录',
            count: 22139,
            icon: 'icon-denglu'
          },
          {
            title: '今日订阅',
            count: 35623,
            icon: 'icon-dingyue'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-pinglun'
          },
          {
            title: '今日播放',
            count: 16826,
            icon: 'icon-bofang'
          },
          {
            title: '今日发布',
            count: 16826,
            icon: 'icon-fabu'
          }
        ]
      },
      easyDataOption2: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        discount: true,
        data: [
          {
            title: '错误日志',
            count: 12678,
            icon: 'icon-cuowu'
          },
          {
            title: '数据展示',
            count: 12678,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '权限管理',
            count: 12678,
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '菜单管理',
            count: 12678,
            icon: 'icon-caidanguanli'
          },
          {
            title: '权限测试',
            count: 12678,
            icon: 'icon-caidanguanli'
          },
          {
            title: '错误页面',
            count: 12678,
            icon: 'icon-caidanguanli'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
<style lang ="scss">
    @import '../../styles/data-display.scss';
    @import '../../styles/data-tab.scss';
    @import '../../styles/data-card.scss';
    @import '../../styles/data-icons.scss';
</style>
