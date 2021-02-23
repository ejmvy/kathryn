import { createWebHistory, createRouter } from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';
import Shop from '@/components/Shop.vue';
import ItemDisplay from '@/components/ItemDisplay.vue';
import Contact from '@/components/views/Contact.vue';


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
    },
    {
        path: '/item/:id',
        name: 'ItemDisplay',
        component: ItemDisplay,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;