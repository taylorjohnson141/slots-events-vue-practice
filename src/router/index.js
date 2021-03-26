import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CoolModals from '../components/CoolModals.vue';
import NotCoolModals from '../components/NotCoolModals.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/coolModals',
    name: 'CoolModals',
    component: CoolModals,
  },
  {
    path: '/NotCoolModals',
    name: 'NotCoolModals',
    component: NotCoolModals,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
