<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer1 from './components/layout/Footer.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>

  <header class="p-7 text-2xl fixed z-30 bg-white w-full">
      <nav class="flex justify-center space-x-8 font-league-gothic ">
        <RouterLink to="/">ACCUEIL </RouterLink>
        <RouterLink to="/programmation">PROGRAMMATION </RouterLink>
        <RouterLink to="/artistes">ARTISTES </RouterLink>
        <RouterLink to="/festival">LE FESTIVAL </RouterLink>
        <RouterLink class="text-fushia" to="/artistes">BILLETERIE </RouterLink>
      </nav>
  </header>

  <RouterView />
  <footer>
    <Footer />
 </footer>
</template>

