import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const mixProps = function () {
  return route => {
    return Object.assign({}, route.params, route.query)
  }
}

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    props: mixProps(),
    component: () => import('../views/Reservation.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router
