import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFound from '../views/Jobs/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    //component: AboutView
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetails,
    props: true
  },
  //redirect!
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  //catch all 404 case
  {
    path: '/:catchALL(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
