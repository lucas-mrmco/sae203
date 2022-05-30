<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue';
</script>

<template>

  <header class="p-7 text-2xl fixed z-30 bg-white w-full shadow-xl">
      <RouterLink class="flex justify-start -mt-5 pb-7 -mb-24" to="/"><img src="../public/logo/logo-xl-color.png" class="w-52" alt=""></RouterLink>
      
      <nav class="flex justify-end space-x-8 font-league-gothic uppercase ">
        <RouterLink class="text-gris hover:text-violet" to="/programmation">Programmation </RouterLink>
        <RouterLink class="text-gris hover:text-violet" to="/artistes">Artistes </RouterLink>
        <RouterLink class="text-gris hover:text-violet" to="/festival">Le festival </RouterLink>
        <RouterLink class="text-fushia hover:text-violet" to="/artistes">Billeterie </RouterLink>
      </nav>
  </header>

  <RouterView />
  <footer>
    <Footer />
 </footer>
</template>

