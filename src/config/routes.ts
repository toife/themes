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
      },

      {
        path: "/components/switch",
        name: "components-switch",
        component: () => import("../pages/components/switch.vue"),
      },

      {
        path: "/components/action",
        name: "components-action",
        component: () => import("../pages/components/action.vue"),
      },

      {
        path: "/components/button",
        name: "components-button",
        component: () => import("../pages/components/button.vue"),
      },

      {
        path: "/components/avatar",
        name: "components-avatar",
        component: () => import("../pages/components/avatar.vue"),
      },

      {
        path: "/components/card",
        name: "components-card",
        component: () => import("../pages/components/card.vue"),
      },

      {
        path: "/components/checkbox",
        name: "components-checkbox",
        component: () => import("../pages/components/checkbox.vue"),
      },

      {
        path: "/components/radio",
        name: "components-radio",
        component: () => import("../pages/components/radio.vue"),
      },
    ],
  },
];
