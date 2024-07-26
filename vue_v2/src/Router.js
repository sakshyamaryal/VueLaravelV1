import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/blogs",
    name: "blogs",
    component: () => import("./components/BlogList.vue")
  },
  {
    path: "/blogs/:id",
    name: "blog-details",
    component: () => import("./components/Blog.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddBlog.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("./components/auth/Signup.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/auth/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
