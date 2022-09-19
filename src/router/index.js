import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Search from "@/views/SearchApp.vue"
import Post from "@/views/PostApp.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
