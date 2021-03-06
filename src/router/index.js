import Vue from 'vue'
import {createRouter, createWebHashHistory} from "vue-router"

const Home = () => import ('views/Home/home.vue')
const Friends = () => import ('views/Friends/friends.vue')
const Discover = () => import ('views/Discover/discover.vue')
const Mine = () => import ('views/Mine/mine.vue')
const Detail = () => import('views/detail/Detail.vue')

// 1.安装插件
// Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect:'/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Friends',
        name: 'Friends',
        component: Friends
    },
    {
        path: '/Discover',
        name: 'Discover',
        component: Discover
    },
    {
        path: '/Mine',
        name: 'Mine',
        component: Mine
    },
    {
        path:'/Detail/:iid',
        name:'Detail',
        component:Detail
    }
]

// 2.创建router
const router = createRouter({
    routes,
    // mode:'history',
    history: createWebHashHistory(),
    base: process.env.BASE_URL
})

export default router