import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/profile',
    alias: '/',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/lessons/:level',
    alias: '/',
    name: 'lessons_list',
    component: () => import('../views/LessonsList.vue')
  },
  {
    path: '/start/:lesson_id',
    alias: '/',
    name: 'start_lesson',
    component: () => import('../views/Lesson.vue')
  },
  

  // {
  //   path: '/puzzle1',
  //   alias: '/',
  //   name: 'puzzle1 card',
  //   component: () => import('../components/AudioCard.vue')
  // },
  // {
  //   path: '/puzzle2',
  //   alias: '/',
  //   name: 'puzzle2 card',
  //   component: () => import('../components/TransCard.vue')
  // },
  // {
  //   path: '/puzzle3',
  //   alias: '/',
  //   name: 'puzzle3 card',
  //   component: () => import('../components/BlankCard.vue')
  // },
  // {
  //   path: '/puzzle4',
  //   alias: '/',
  //   name: 'puzzle4 card',
  //   component: () => import('../components/PuzzleCard.vue')
  // },
  // {
  //   path: '/puzzle5',
  //   alias: '/',
  //   name: 'puzzle5 card',
  //   component: () => import('../components/AudioPuzzleCard.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
