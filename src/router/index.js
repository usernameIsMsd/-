import Vue from 'vue'
import Router from 'vue-router'
import vue from '@/components/vue'
import echarts from '@/components/echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'echarts',
      component: echarts
    },{
      path: '/vue',
      name: 'vue',
      component: vue
    }
  ]
})
