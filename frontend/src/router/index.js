import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Create from "../pages/Create.vue";
import store from "../store";

const routes = [
  { path: "/login", name: "Login", component: Login },
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.authenticated) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    beforeEnter: (to, from, next) => {
      if (!store.state.authenticated) {
        next("/login");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
