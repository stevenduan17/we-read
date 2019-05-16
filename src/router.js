import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      name: 'ebook',
      component: () => import('./views/ebook/EBook.vue'),
      children: [
        {
          path: ':fileName',
          component: () => import('./components/ebook/Reader.vue')
        }
      ]
    }
  ]
})
