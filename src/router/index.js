import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/homePage'
import newsActivity from '@/components/newsActivity/newsActivity'
import mao from '@/components/newsActivity/mao'
import test from '@/components/newsActivity/sildeTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/newsActivity',
      name: 'newsActivity',
      component: newsActivity
    },
    {
      path: '/mao',
      name: 'mao',
      component: mao
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
