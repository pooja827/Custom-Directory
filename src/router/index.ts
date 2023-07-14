import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/studenttable',
      name: 'studenttable',
      component: () => import('../views/StudentTable.vue')
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: () => import('../views/TextCount.vue')
    },
    {
      path: '/textmethod',
      name: 'textmethod',
      component: () => import('../views/TextCountMethods.vue')
    },
    
    { path: '/table', name :'table', 
       component: () => import('../views/Table.vue') },

    { path: '/axiosview', name :'axiosview', 
       component: () => import('../views/EmployeeTableAxios.vue') },
    { path: '/createform', name :'createform', 
       component: () => import('../views/EmpFormView.vue') },
       { path: '/axiosupdate', name :'axiosupdate', 
       component: () => import('../views/updateformdemo.vue') },
       { path: '/employeePortal', name :'employeePortal', 
       component: () => import('../views/SinglePageApplication.vue') },
       { path: '/currency', name :'currency', 
       component: () => import('../views/currencygenerator.vue') },
  ]

  
})

export default router



