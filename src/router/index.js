import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Groupomania from '../components/Groupomania'
import Pekocko from '../components/Pekocko'
import Orinoco from '../components/Orinoco'
import Frontend from '../components/Frontend'
import NotFound from '../components/NotFound'
import Calculateur from '../components/Calculateur'
import Crowdfund from '../components/Crowdfund'
import Movies from '../components/Movies'
import ChatReact from '../components/ChatReact'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "help" */ '../views/Contact.vue')
  },
  {
    path: '/groupomania',
    name: 'Groupomania',
    component: Groupomania
  },
  {
    path: '/pekocko',
    name: 'Pekocko',
    component: Pekocko
  },
  {
    path: '/orinoco',
    name: 'Orinoco',
    component: Orinoco
  },
  {
    path: '/react-app-chat',
    name: 'ChatReact',
    component: ChatReact
  },
  {
    path: '/frontend',
    name: 'Frontend',
    component: Frontend
  },
  {
    path: '/calculateur',
    name: 'Calculateur',
    component: Calculateur
  },
  {
    path: '/crowdfund',
    name: 'Crowdfund',
    component: Crowdfund
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split('#')[1]
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' })
      }
    } else if (SavedPosition) {
      return SavedPosition
    } else {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
    }
  }
})

export default router