import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
        hidden: true
    },
    {
        path: '/home',
        component: () => import('@/views/HelloWorld'),
        hidden: true
    },
    {
        path: '/todoboard',
        component: () => import('@/views/TodoBoard'),
        hidden: true
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
