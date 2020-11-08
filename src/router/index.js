import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
// @ts-ignore
import ActiveBlog from '../pages/ActiveBlog.vue'
import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/api/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/api/blogs/:blogId',
    name: 'ActiveBlog',
    component: ActiveBlog
  }

]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
