<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue';
</script>

<template>

  <header class="lg:p-7 p-2 text-xl sm:text-2xl lg:text-4xl fixed z-30 bg-white w-full shadow-xl">
      <RouterLink class="md:flex md:justify-start  lg:pb-7 lg:-mb-24" to="/"><img src="../public/logo/logo-xl-color.png" class="w-32 lg:w-52 mx-auto md:mx-0" alt=""></RouterLink>
      
      <nav class="md:flex md:space-x-8 lg:-mt-12 lg:mx-8 px-2 justify-center flex-col md:flex-row md:mx-16 pl-4 md:justify-end space-x-5 font-league-gothic uppercase ">
        <RouterLink class="text-gris hover:text-violet" to="/programmation">Programmation </RouterLink>
        <RouterLink class="text-gris hover:text-violet" to="/artistes">Artistes </RouterLink>
        <RouterLink class="text-gris hover:text-violet" to="/festival">Le&nbsp;festival </RouterLink>
        <RouterLink class="text-fushia hover:text-violet" to="/festival/#billeterie">Billeterie </RouterLink>
      </nav>
  </header>

  <RouterView />
  <footer>
    <Footer />
 </footer>
</template>

