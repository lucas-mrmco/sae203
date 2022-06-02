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
        class="flex-grow "
      />
    </div>
    <div
      class="flex justify-start items-start absolute overflow-hidden "
    >
    </div>
    <div
      class="flex flex-col justify-start items-start w-full py-3 lg:py-6 absolute  lg:top-80 top-60  bg-gray-50/90"
    >
      <div
        class="flex flex-col justify-center items-center self-stretch relative "
      >
        <img
          src="../../public/logo/logo-xl-color.png"
          class="flex-grow-0 flex-shrink-0 lg:w-80 w-40 "
        />
      </div>
      <div
        class=" justify-center  relative w-full"
      >
        <h1 class="flex-grow-0 flex-shrink-0 text-5xl lg:text-7xl text-center font-bangers">
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
        <h2  class="flex-grow-0 flex-shrink-0 text-3xl pr-10 lg:text-5xl text-left capitalize text-gris font-faster-one ">
          en extérieur
        </h2>
      </div>
    </div>
  </div>
</div>




<!-- nav vers pages pricipales avec fond violet en gradient-->
<img src="../../public/bg/fond.png" class="absolute   lg:-mt-32 -mt-16 md:-mt-20 h-full" alt="">
<Home1 />

<!-- 
<div class="flex grid-cols-3 lg:space-x-80 space-x-40 mx-auto py-5 justify-center   relative">
  <a href="/festival"><BoutonTransparent1>Le Festival</BoutonTransparent1></a>
  <a href="/programmation"><BoutonTransparent1>Programmation</BoutonTransparent1></a>    
  <a href="/artistes"><BoutonTransparent1>Artistes</BoutonTransparent1></a>    
      

</div> -->
<!-- 
<div class="grid-cols-3 flex space-x-52 justify-center -mt-40  mb-16 relative  text-lg font-montserrat">
    premier bouton 
     <div class="border-2 border-white hover:bg-white rounded-lg py-5 px-auto w-64 text-center text-white hover:text-violet">
      <a href="../views/Festival.vue" class=""> Le festival</a>
     </div>
    2em bouton 
     <div class="border-2 border-white hover:bg-white rounded-lg py-5 px-auto w-64 text-center text-white hover:text-violet">
    <a href="/artistes" class=""> Artistes</a>
   
    </div>

    3em bouton 
    <div class="border-2 border-white hover:bg-white text-white hover:text-violet  rounded-lg py-5 px-auto w-64 text-center">
        <a href="/programmation" class=""> Programmation </a>
        
    </div>
    
</div> -->

<div class="lg:mt-60 lg:m-20 m-0 text-center p-10">
    <Card class=""/>
    


<a href="/festival/#billeterie" class="font-league-gothic text-xl  lg:text-3xl text-fushia ">
    
        Billeterie

    
    
</a>
</div>

    
</template>

<script></script>