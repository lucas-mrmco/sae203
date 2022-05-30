<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue';
</script>

<template>

  <header class="p-7 text-2xl fixed z-30 bg-white w-full">
      <nav class="flex justify-center space-x-8 font-league-gothic uppercase ">
        <RouterLink to="/">Accueil </RouterLink>
        <RouterLink to="/programmation">Programmation </RouterLink>
        <RouterLink to="/artistes">Artistes </RouterLink>
        <RouterLink to="/festival">Le festival </RouterLink>
        <RouterLink class="text-fushia" to="/artistes">Billeterie </RouterLink>
      </nav>
  </header>

  <RouterView />
  <footer>
    <Footer />
 </footer>
</template>

