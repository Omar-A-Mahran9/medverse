import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import SignupViewVue from "@/views/SignupView.vue";
import InventoryView from "@/views/InventoryView.vue";

import ProfileView from "@/views/ProfileView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginViewVue,
  },
  {
    path: "/inventory",
    name: "inventory",
    component: InventoryView,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: SignupViewVue,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
