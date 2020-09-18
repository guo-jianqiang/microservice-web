import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../layout/index.vue'
import AppMain from '../layout/AppMain.vue'

const ComponentWrapper = window.__POWERED_BY_REACT_ ? AppMain : Layout
export const constantRoutes = [
  {
    path: '/',
    component: ComponentWrapper,
    redirect: '/table',
    name: '首页',
    children: [{
      path: '/table',
      name: 'table',
      component: () => import('../view/Table/Table.vue'),
      meta: { title: 'table', icon: 'dashboard' }
    },
      {
        path: '/modal',
        name: 'modal',
        component: () => import('../view/Modal/Modal'),
        meta: { title: 'modal', icon: 'dashboard' }
      }]
  },
]

const createRouter = () => new Router({
  base: '/vue',
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
