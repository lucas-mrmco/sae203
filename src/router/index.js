import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Artistes from '../views/Artistes.vue'
import Festival from '../views/Festival.vue'
import Programmation from '../views/Programmation.vue'
import Contact from '../views/Contact.vue'
import Artiste from '../views/Artiste.vue'
import Concert from '../views/Concert.vue'
import Mentions from '../views/Mentions.vue'
import StyleGuide from '../views/StyleGuide.vue'
import page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/artistes', name: 'Artistes', component: Artistes },
    { path: '/festival', name: 'Festival', component: Festival },
    { path: '/programmation', name: 'Programmation', component: Programmation },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/artiste', name: 'Artiste', component: Artiste },
    { path: '/concert', name: 'Concert', component: Concert },
    { path: '/mentions', name: 'Mentions', component: Mentions },
    { path: '/style-guide', name: 'StyleGuide', component: StyleGuide },
    { path: '/:pathMatch(.*)', name: 'page404', component: page404 },

  ]
})

export default router
