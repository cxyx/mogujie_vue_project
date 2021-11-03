import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import testRouter from "@/views/router.js";
// import {About} from "@/views/About"
// import {About} from "@/views/About"

const routes = [
  ...testRouter

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// export default router
export default router
