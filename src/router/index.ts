import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import { usePermissStore } from '../store/permiss'
import Home from "../views/sys/home.vue";

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard/Workbench'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard/Workbench",
                name: "dashboard/Workbench",
                meta: {
                    title: '工作台',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "/dashboard/Workbench" */ "@/views/dashboard/workbench/index.vue")
            },
            {
                path: '/dashboard/analysis',
                name: "dashboard/analysis",
                meta: {
                    title: '分析报告',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "dashboard/analysis" */ "@/views/dashboard/analysis/index.vue")
            },
            {
                path: "/Sales/Workbench",
                name: "Sales/Workbench",
                meta: {
                    title: '工作台',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "/Sales/Workbench" */ "@/views/Sales/workbench/index.vue")
            },
            {
                path: '/Sales/analysis',
                name: "Sales/analysis",
                meta: {
                    title: '分析报告',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "dashboard/analysis" */ "@/views/Sales/analysis/index.vue")
            },
            {
                path: '/Sales/channel',
                name: "Sales/channel",
                meta: {
                    title: '销售渠道',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "dashboard/channel" */ "@/views/Sales/channel/index.vue")
            },
            {
                path: '/Sales/channelPrice',
                name: "Sales/channelPrice",
                meta: {
                    title: '渠道价格',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "dashboard/channelPrice" */ "@/views/Sales/channelPrice/index.vue")
            },
            {
                path: '/Sales/backstagePrice',
                name: "Sales/backstagePrice",
                meta: {
                    title: '后台价格',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "dashboard/backstagePrice" */ "@/views/Sales/backstagePrice/index.vue")
            },
            {
                path: '/Sales/available',
                name: "Sales/available",
                meta: {
                    title: '房态',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "dashboard/available" */ "@/views/Sales/available/index.vue")
            },
            {
                path: "/Houses/Workbench",
                name: "Houses/Workbench",
                meta: {
                    title: '工作台',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "/Houses/Workbench" */ "@/views/Houses/workbench/index.vue")
            },
            {
                path: '/Houses/analysis',
                name: "Houses/analysis",
                meta: {
                    title: '分析报告',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "dashboard/analysis" */ "@/views/Houses/analysis/index.vue")
            },
            {
                path: '/test/AccessToken_myhostex',
                name: "test/AccessToken_myhostex",
                meta: {
                    title: 'AccessToken_myhostex',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "test/AccessToken_myhostex" */ "@/views/test/AccessToken_myhostex/index.vue")
            },
            {
                path: '/test/myhostex_price',
                name: "test/myhostex_price",
                meta: {
                    title: 'myhostex_price',
                    permiss: '1'
                },
                component: () => import ( /* webpackChunkName: "test/AccessToken_myhostex" */ "@/views/test/myhostex_price/index.vue")
            },


        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/sys/login.vue")
    }, {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限'
        },
        component: () => import (/* webpackChunkName: "403" */ '../views/sys/error-log/403.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

export default router;