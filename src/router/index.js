import { createWebHistory, createRouter } from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';
import Shop from '@/components/Shop.vue';
import ItemDisplay from '@/components/ItemDisplay.vue';
import Contact from '@/components/views/Contact.vue';
import Admin from '@/components/views/Admin.vue';
import CartView from '@/components/views/CartView.vue';
import ShowCollection from '@/components/views/ShowCollection.vue';
import Login from '@/components/views/Login.vue';
import Payment from '@/components/CartSection/Payment.vue';


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
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartView,
    },
    {
        path: '/shop/:category',
        name: 'ShowCollection',
        component: ShowCollection,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        window.scrollTo(0,0);
    }
})

export default router;