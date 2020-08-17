import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import vCart from '../components/v-cart.vue'
import Home from '../views/Home.vue'
import Search from '../components/Search.vue'
import Recipe from '../components/Recipe.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/list",
    name: "vCart",
    component: vCart,
    props: true
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/recipe",
    name: "Recipe",
    component: Recipe,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
