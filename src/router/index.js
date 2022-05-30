import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Artistes from '../views/Artistes.vue'
import Billeterie from '../views/Billeterie.vue'
import Festival from '../views/Festival.vue'
import Programmation from '../views/Programmation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/artistes', name: 'Artistes', component: Artistes },
    { path: '/billeterie', name: 'Billeterie', component: Billeterie },
    { path: '/festival', name: 'Festival', component: Festival },
    { path: '/programmation', name: 'Programmation', component: Programmation },

  ]
})

export default router
