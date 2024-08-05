import { createWebHistory, createRouter } from "vue-router";
import { isAuthenticated } from './components/auth/authenticate';

const routes = [
  {
    path: "/",
    alias: "/blogs",
    name: "blogs",
    component: () => import("./components/BlogList.vue"),
    // meta: {
    //   requiresAuth: true // Add meta field to indicate protected route
    // }
  },
  {
    path: "/blogs/:id",
    name: "blog-details",
    component: () => import("./components/Blog.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddBlog.vue"),
    meta: {
      requiresAuth: true // Add meta field to indicate protected route
    }
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
  },
  {
    path: "/userlist",
    name: "userlist",
    component: () => import("./components/user/UserList.vue")
  },
  {
    path: "/user/:id",
    name: "user",
    component: () => import("./components/user/User.vue")
  },
  {
    path: "/add-user",
    name: "add-user",
    component: () => import("./components/user/AddUser.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("./components/Home.vue")
  },
  {
    path: "/post/:id",
    name: "PostDetails",
    component: () => import("./components/Post.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
