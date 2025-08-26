import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/Layout.vue';

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '2dchart/amchart',
        name: '2D amchart',
        component: () => import('@/views/ColumnChart.vue')
      },
      {
        path: '2dchart/lightningChart',
        name: '2D lightning chart',
        component: () => import('@/views/LCJS.vue')
      },
      {
        path: '3dchart/lightningChart',
        name: '3D lightning chart',
        component: () => import('@/views/LightningChart.vue')
      },
      {
        path: 'dialog/dialog-drag',
        name: 'Dialog Drag',
        component: () => import('@/views/DialogDrag')
      },
      {
        path: 'dialog/elementUI',
        name: 'Dialog Drag',
        component: () => import('@/views/ElementUIDialog')
      },
      {
        path: 'dashboard',
        component: () => import('@/views/DashBoard'),
        hidden: true
      }

    ]
  }
];

const createRouter = () =>
  new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
