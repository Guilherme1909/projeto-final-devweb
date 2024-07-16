const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/MateadaPage",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/MateadaPage",
        component: () => import("pages/MateadaPage.vue"),
      },
    ],
  },

  {
    path: "/ValidadorCpf",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/ValidadorCpf",
        component: () => import("pages/ValidadorCpf.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
