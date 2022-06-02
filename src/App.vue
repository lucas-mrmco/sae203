<script setup>
import { RouterLink, RouterView } from 'vue-router'

import HeaderXS from './components/layout/HeaderXS.vue';
import HeaderLG from './components/layout/HeaderLG.vue';
import Footer1 from './components/layout/Footer.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
    <header class="text-gris">
    <HeaderXS class="xl:hidden" />
    <HeaderLG class="hidden xl:flex" />
  </header>
  <footer>
    <Footer/>
  </footer>
</template>

