<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue';
</script>

<template>

  <header class="p-7 text-2xl fixed z-30 bg-white w-full shadow-xl">
      <RouterLink class="md:flex justify-start -mt-5 pb-7 -mb-24" to="/"><img src="../public/logo/logo-xl-color.png" class="w-52" alt=""></RouterLink>
      
      <nav class="md:flex md:space-x-8 mx-8 flex-col md:flex-row md:mx-16 pl-4 md:justify-end space-x-3 font-league-gothic uppercase ">
        <RouterLink class="text-gris hover:text-violet" to="/programmation">Programmation </RouterLink>
        <RouterLink class="text-gris hover:text-violet" to="/artistes">Artistes </RouterLink>
        <RouterLink class="text-gris hover:text-violet" to="/festival">Le&nbspfestival </RouterLink>
        <RouterLink class="text-fushia hover:text-violet" to="/festival/#billeterie">Billeterie </RouterLink>
      </nav>
  </header>

  <RouterView />
  <footer>
    <Footer />
 </footer>
</template>

