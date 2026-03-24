import { createApp } from "vue";
import App from "./App.vue";
import "./app.scss";
import routes from "./config/routes";
import { createRouter, createWebHistory } from "vue-router";
import { createToife } from "@toife/vue";

const app = createApp(App);
app.use(createToife());

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
app.use(router);
router.isReady().then(() => {
  app.mount("#app");
});
