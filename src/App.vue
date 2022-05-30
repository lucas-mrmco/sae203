<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header class="p-7 text-2xl fixed z-30 bg-white w-full">
      <nav class="flex justify-center space-x-8 font-league-gothic ">
        <RouterLink to="/">ACCUEIL </RouterLink>
        <RouterLink to="/programmation">PROGRAMMATION </RouterLink>
        <RouterLink to="/artistes">ARTISTES </RouterLink>
        <RouterLink to="/festival">LE FESTIVAL </RouterLink>
        <RouterLink to="/artistes">BILLETERIE </RouterLink>
      </nav>
  </header>

  <RouterView />
  <footer class="block h-64 bg-fondsite text-white">
 <Footer1 />
 </footer>
</template>

