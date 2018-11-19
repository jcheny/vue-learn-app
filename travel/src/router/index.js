import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
