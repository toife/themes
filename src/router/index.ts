import { createRouter, createWebHistory } from "vue-router";

import Home from "@doc/views/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "home", component: Home }],
});
