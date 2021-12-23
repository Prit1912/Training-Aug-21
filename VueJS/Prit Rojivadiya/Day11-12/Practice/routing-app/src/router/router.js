import { createWebHistory, createRouter } from "vue-router";
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import User from '../view/User.vue'
import NotFound from '../view/NotFound.vue'
import Contact from '../view/Contact/Contact.vue'
import Address from '../view/Contact/Address.vue'
import Jobs from '../view/jobs/jobs.vue'
import JobDetails from '../view/jobs/jobDetails.vue'
import user from '../components/User.vue'
import login from '../components/login.vue'
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: "/user/:userId",
    name: "User",
    component: User,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails ,
    props: true

  },
  {
    path: "/contact",
    name: 'Contact',
    component: Contact,
    children: [
      {
        path: 'address',
        component: Address,
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: '/all-jobs',
    redirect: '/jobs'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
    console.log(store)
    if(!store.user){
      console.log(store);
      next({
        name: "login"
      })
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router;