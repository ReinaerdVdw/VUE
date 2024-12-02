import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/Home/HomePage.vue';
import RobotBuilder from '@/build/RobotBuilder.vue';
import ProductSearch from '@/search/ProductSearch.vue';
import PartsInfo from '@/parts/PartsInfo.vue';
import ShoppingCart from '@/cart/ShoppingCart.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder
    },
    {
      path: '/search',
      name: 'Search',
      component: ProductSearch
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartsInfo,
      props: true
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
  ]
});
