<template>
  
<div class="p-40 text-gris">
    <h1 class="font-bangers font-bold text-7xl m-4  text-center">Guide de styles</h1>

  <h2 class="font-faster-one font-bold text-6xl m-4 ">Colors</h2>

    <div class="flex space-x-4 m-4">
    <div class="bg-violet w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-fushia w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-gris w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-white w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-bleu w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
  </div>

   <h2 class="font-faster-one pt-20 font-bold text-6xl m-4">Icons</h2>
   <div class="flex m-4 bg-violet rounded-xl py-3 w-1/2 gap-8 justify-center">
     <Close/>
     <img src="../../public/icons/date-white.svg" alt="">
     <img src="../../public/icons/menu.svg" alt="">
     <img src="../../public/icons/place-white.svg" alt="">
     <img src="../../public/icons/spotify.svg" alt="">
     <img src="../../public/icons/title.svg" alt="">
  </div>
  
  <h2 class="font-faster-one pt-20 font-bold text-6xl m-4 ">Typography</h2>
  <h6 class="font-bangers font-bold text-7xl m-4 ">h 1</h6>
  <h6 class="font-faster-one font-bold text-6xl m-4 ">h2</h6>
  <h6 class="font-league-gothic uppercase text-3xl m-4 ">h3</h6>
  <h6 class="font-montserrat uppercase font-semi-bold text-xl m-4 ">h4</h6>
  <h6 class="font-montserrat text-lg m-4 ">The quick brown fox jumps over the lazy dog</h6>

  <h6 class="font-bangers font-bold text-5xl m-4 ">h 1</h6>
  <h6 class="font-faster-one font-bold text-3xl m-4 ">h2</h6>
  <h6 class="font-league-gothic uppercase text-2xl m-4 ">h3</h6>
  <h6 class="font-montserrat uppercase font-semi-bold text-lg m-4 ">h4</h6>
  <h6 class="font-montserrat text-base m-4 ">The quick brown fox jumps over the lazy dog</h6>


  <h2 class="font-faster-one pt-20 text-6xl m-4">Molécules</h2>

  <div class="pb-80  my-9">
    <Preview />
      <Card1/>
      <Home1/>
      <ProgCard2 class=""/>
      
  </div>
</div>
<div class="p-80">
  <Pass/>
</div>

  

   
</template>
<script setup>
import Home1 from "../components/Home1.vue";
import ProgCard from "../components/ProgCard.vue";
import ProgCard1 from "../components/ProgCard.vue";
import Card1 from "../components/scenes/Card.vue";
import Home11 from "../components/Home1.vue";
import Menu from "../components/icons/Menu.vue";
import Close from "../components/icons/Close.vue";
import Card2 from "../components/scenes/Card.vue";
import ProgCard2 from "../components/ProgCard.vue";
import Pass from "../components/Pass.vue";
import Preview from "../components/Preview.vue";
import Menu1 from "../components/icons/Menu.vue";

</script>
