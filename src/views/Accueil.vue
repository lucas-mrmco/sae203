<script setup>
import Card from "../components/Card.vue"
import Home1 from "../components/Home1.vue";
import BoutonTransparent from "../components/buttons/BoutonTransparent.vue";
import BoutonTransparent1 from "../components/buttons/BoutonTransparent.vue";
</script>

<template>
<!-- hero -->
<div class="flex justify-center items-center w-full ">
  <div class="flex-grow w-full">
    <div 
      class="flex justify-start items-start w-full   "
    >
      <img
        src="../../public/hero/hero-3.webp"
        class="flex-grow sm:pt-20 lg:pt-0 "
      />
    </div>
    <div
      class="flex justify-start items-start absolute overflow-hidden "
    >
    </div>
    <div
      class="flex flex-col justify-start items-start w-full py-3 lg:py-6 absolute  lg:top-80 md:top-60 sm:top-32 top-0 bg-gray-50/90"
    >
      <div
        class="flex flex-col justify-center items-center self-stretch relative "
      >
        <img
          src="../../public/logo/logo-xl-color.png"
          class="flex-grow-0 flex-shrink-0 lg:w-80 md:w-40 w-20"
        />
      </div>
      <div
        class=" justify-center  relative w-full flex-wrap"
      >
        <h1 class="flex-grow-0 flex-shrink-0 text-3xl md:text-5xl lg:text-7xl text-center font-bangers">
          <span class="flex-grow-0 flex-shrink-0 text-left text-blue-600">Z</span
          ><span class="flex-grow-0 flex-shrink-0  text-left text-gris">énith </span
          
          ><span class="flex-grow-0 flex-shrink-0  text-left text-violet">R</span
          ><span class="flex-grow-0 flex-shrink-0  text-left text-gris">ap </span
          ><span class="flex-grow-0 flex-shrink-0  text-left text-fushia">S</span
          ><span class="text-gris"
            >trasbourg</span
          >
        </h1>
      </div>
      <div
        class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative"
      >
        <h2  class="flex-grow-0 flex-shrink-0 text-lg md:text-3xl pr-10 lg:text-5xl text-left capitalize text-gris font-faster-one ">
          en extérieur
        </h2>
      </div>
    </div>
  </div>
</div>




<!-- nav vers pages pricipales avec fond violet en gradient-->
<img src="../../public/bg/fond.png" class="absolute invisible md:visible  lg:-mt-32 mt-80 md:-mt-20 h-full 2xl:w-full" alt="">
<img src="../../public/bg/fond-mob.png" class="absolute  md:hidden  -mt-10  w-screen mb-80" alt="">
<Home1 />

<!-- lien vers Billeterie visible jusqu'à md -->
<a href="/festival/#billeterie" class="font-league-gothic text-xl z-30  md:invisible visible lg:text-3xl text-fushia bg-white relative mt-80 mx-auto block text-center w-20 rounded-md  ">
    
        Billeterie

    
    
</a>
<Card class=""/>
<div class="lg:-mt-60 mt-20 lg:m-20 m-0 text-center p-10">
    
    

<!-- lien vers Billeterie visible à partir de md -->
<a href="/festival/#billeterie" class="font-league-gothic text-xl lg:mt-0 invisible md:visible lg:text-3xl text-fushia block mx-auto ">
    
        Billeterie

    
    
</a>
</div>

    
</template>

<script></script>