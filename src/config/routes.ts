export default [
  {
    path: "/example",
    redirect: "/components",
  },
  {
    path: "/",
    name: "root",
    component: () => import("../layouts/document.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/home.vue"),
      }
    ],
  },
];
