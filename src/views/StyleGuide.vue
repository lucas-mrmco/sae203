<template>
  
<div class="p-40">
    <h1 class="font-bangers font-bold text-7xl m-4 text-gray-700 text-center">Guide de styles</h1>

  <h2 class="font-faster-one font-bold text-6xl m-4 text-gray-700">Colors</h2>

    <div class="flex space-x-4 m-4">
    <div class="bg-violet w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-fushia w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-gris w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-white w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-bleu w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
  </div>

   <h2 class="font-inter font-bold text-xl m-4">Icons</h2>
   <div class="flex m-4">
  <FireIcon class="w-8 m-3" />
  <BadgeCheckIcon class="w-8 m-3" />
  <BookOpenIcon class="w-8 m-3" />
  <CakeIcon class="w-8 m-3" />
  <ChevronDoubleDownIcon class="w-8 m-3" />
  </div>
  <div class="flex m-4">
  <ClipboardCheckIcon class="w-8 m-3" />
  <CloudDownloadIcon class="w-8 m-3" />
  <ChatAlt2Icon class="w-8 m-3" />
  <MenuAlt2Icon class="w-8 m-3" />
  <CubeIcon class="w-8 m-3" />
  </div>
  <h2 class="font-league-gothic uppercase font-semi-bold text-xl m-4 text-fushia">Typography</h2>
  <h6 class="font-bangers font-bold text-7xl m-4 text-gray-700">h 1</h6>
  <h6 class="font-faster-one font-bold text-6xl m-4 text-gray-700">h2</h6>
  <h6 class="font-league-gothic uppercase text-3xl m-4 text-gray-700">h3</h6>
  <h6 class="font-montserrat uppercase font-semi-bold text-xl m-4 text-gray-700">h4</h6>
  <h6 class="font-montserrat text-lg m-4 text-gray-700">The quick brown fox jumps over the lazy dog</h6>
  <h2 class="font-inter font-bold text-xl m-4">Molécules</h2>

  <div class="flex mx-9 my-9">
      <Card1/>
      <Home1/>
  </div>
</div>
  

   
</template>
<script setup>
import Card from "../components/Card.vue"
import Home1 from "../components/Home1.vue";
import ProgCard from "../components/ProgCard.vue";
import ProgCard1 from "../components/ProgCard.vue";
import Card1 from "../components/scenes/Card.vue";
import Home11 from "../components/Home1.vue";

</script>
