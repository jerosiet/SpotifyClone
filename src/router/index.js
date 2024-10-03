import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import SearchView from '../components/SearchView.vue'
import LibraryView from '../components/LibraryView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/search', component: SearchView },
  { path: '/library', component: LibraryView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
