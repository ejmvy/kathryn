import { createWebHistory, createRouter } from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';
import Shop from '@/components/Shop.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage,
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;