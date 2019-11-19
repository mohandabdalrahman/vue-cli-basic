import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewProfile from '../components/ViewProfile.vue'
import Blogs from '../components/Blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/profile/:user_id',
    name:'ViewProfile',
    component:ViewProfile
  },
  {
    path:'/blogs',
    name:'Blogs',
    component:Blogs
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
