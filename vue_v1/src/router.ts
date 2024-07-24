import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
      path: "/",
      alias: "/blog",
      name: "blog",
      component: () => import("./components/BlogList")
    },
    {
      path: "/blog/:id",
      name: "blog-details",
      component: () => import("./components/Blog")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddBlog")
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;