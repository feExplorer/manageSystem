import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
Vue.use(Router)

export const constantRouterMap = [{
    path: '/login',
    component: () => import('@/views/login'),
    name: 'loginAdmin',
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  {
    path: '/dashboard',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'el-icon-menu'
    },
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/Dashboard'),
      meta: {
        title: 'dashboard',
        icon: 'el-icon-menu'
      }
    }]
  },
  // 图表
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/DiscountFigure',
    name: 'charts',
    meta: {
      title: 'charts',
      icon: 'el-icon-s-data'
    },
    children: [{
        path: 'DiscountFigure',
        name: 'DiscountFigure',
        component: () => import('@/views/charts/DiscountFigure'),
        meta: {
          title: 'DiscountFigure',
          icon: 'discounting'
        }
      },
      {
        path: 'columnar',
        name: 'columnar',
        component: () => import('@/views/charts/columnar'),
        meta: {
          title: 'columnar',
          icon: 'columnar'
        }
      },
      {
        path: 'barGraph',
        name: 'barGraph',
        component: () => import('@/views/charts/barGraph'),
        meta: {
          title: 'barGraph',
          icon: 'barGraph'
        }
      },
      {
        path: 'pieChart',
        name: 'pieChart',
        component: () => import('@/views/charts/pieChart'),
        meta: {
          title: 'pieChart',
          icon: 'pieChart'
        }
      },
      {
        path: 'ringChart',
        name: 'ringChart',
        component: () => import('@/views/charts/ringChart'),
        meta: {
          title: 'ringChart',
          icon: 'ringChart'
        }
      },
      {
        path: 'waterfallCharts',
        name: 'waterfallCharts',
        component: () => import('@/views/charts/waterfallCharts'),
        meta: {
          title: 'waterfallCharts',
          icon: 'waterfallCharts'
        }
      },
      {
        path: 'funnelCharts',
        name: 'funnelCharts',
        component: () => import('@/views/charts/funnelCharts'),
        meta: {
          title: 'funnelCharts',
          icon: 'funnelCharts'
        }
      },
      {
        path: 'radarCharts',
        name: 'radarCharts',
        component: () => import('@/views/charts/radarCharts'),
        meta: {
          title: 'radarCharts',
          icon: 'radarCharts'
        }
      },
      {
        path: 'sankeyChart',
        name: 'sankeyChart',
        component: () => import('@/views/charts/sankeyChart'),
        meta: {
          title: 'sankeyChart',
          icon: 'sankeyChart'
        }
      },
      {
        path: 'heatmapChart',
        name: 'heatmapChart',
        component: () => import('@/views/charts/heatmapChart'),
        meta: {
          title: 'heatmapChart',
          icon: 'heatmapChart'
        }
      },
      {
        path: 'scatterChart',
        name: 'scatterChart',
        component: () => import('@/views/charts/scatterChart'),
        meta: {
          title: 'scatterChart',
          icon: 'scatterChart'
        }
      },
      {
        path: 'candleChart',
        name: 'candleChart',
        component: () => import('@/views/charts/candleChart'),
        meta: {
          title: 'candleChart',
          icon: 'candleChart'
        }
      },
      {
        path: 'gaugeChart',
        name: 'gaugeChart',
        component: () => import('@/views/charts/gaugeChart'),
        meta: {
          title: 'gaugeChart',
          icon: 'gaugeChart'
        }
      },
      {
        path: 'treeChart',
        name: 'treeChart',
        component: () => import('@/views/charts/treeChart'),
        meta: {
          title: 'treeChart',
          icon: 'treeChart'
        }
      }
    ]
  }
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
