import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/homePage'
import newsActivity from '@/components/newsActivity/newsActivity'

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
    }
  ]
})
