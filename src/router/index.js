import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import index from '@/page/index'
import goodsList from '@/page/goodsList'
import changeCity from '@/page/changeCity'
import login from '@/page/login'
import register from '@/page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: defaultPage,
      redirect: 'index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: 's/:name',
          name: 'goods',
          component: goodsList
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: changeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register
        }
      ]
    }
  ]
})
