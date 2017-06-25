import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import API from '@/components/API'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo
    },
    {
      path: '/api',
      name: 'api',
      component: API
    }
  ]
})
