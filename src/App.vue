<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<img src="../public/logo/logo-xl-color.png" class="w-7 h-7 max-w-" alt="">
  <header>

        
    <!-- <div
  class="flex justify-start items-start w-[1440px] h-[100px] relative gap-2.5 px-[55px] bg-white"
>
  <div class="flex-grow h-[100px]">
    <div
      class="flex justify-start items-start w-[1330px] absolute left-[54.5px] top-[-0.5px] gap-[30px]"
    >
      <img src="image-1.png" class="flex-grow-0 flex-shrink-0 w-[156.5px] h-[100px] object-cover" />
      <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1198px] relative overflow-hidden">
        
</div> -->
      <nav class="flex fixed justify-center space-x-8">
        <RouterLink to="/artistes">ARTISTES </RouterLink>
        <RouterLink to="/festival">LE FESTIVAL </RouterLink>
        <RouterLink to="/artistes">BILLETERIE </RouterLink>
      </nav>
  </header>

  <RouterView />
</template>


