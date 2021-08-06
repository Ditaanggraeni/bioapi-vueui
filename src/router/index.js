import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/bio/Index.vue'
import Detailbio from '../views/bio/Detailbio.vue'
import Editbio from '../views/bio/Editbio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: '/detailbio/:id',
    name: 'Detailbio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailbio
  },
  {
    path: '/editbio',
    name: 'Editbio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editbio
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
