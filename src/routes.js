import { createRouter, createWebHistory } from 'vue-router';
import Index from './views/index.vue';
import Checkout from './views/checkout.vue';
import Catalogue from './views/catalogue.vue'
import ProductView from './views/ProductView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Homepage', component: Index},
        {path: '/checkout', name: 'Checkout', component: Checkout},
        {path: '/catalogue', name: 'Catalogue', component: Catalogue},
        {path: '/product/:id', name: 'ProductView', component: ProductView},
    ],
})

export default router;