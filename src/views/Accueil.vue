<script setup>
import Card from "../components/Card.vue"
import Home1 from "../components/Home1.vue";
import BoutonTransparent from "../components/buttons/BoutonTransparent.vue";
</script>

<template>
<!-- hero -->
<div class="flex justify-center items-center w-full ">
  <div class="flex-grow w-full">
    <div 
      class="flex justify-start items-start w-full  left-8 gap-2.5 "
    >
      <img
        src="../../public/hero/hero-3.webp"
        class="flex-grow   -mb-44 "
      />
    </div>
    <div
      class="flex justify-start items-start absolute overflow-hidden gap-2.5 "
    >
    </div>
    <div
      class="flex flex-col justify-start items-start w-full py-6 absolute  top-80 overflow-hidden  bg-gray-50/90"
    >
      <div
        class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 "
      >
        <img
          src="../../public/logo/logo-xl-color.png"
          class="flex-grow-0 flex-shrink-0 w-80 "
        />
      </div>
      <div
        class="flex justify-center  items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
      >
        <h1 class="flex-grow-0 flex-shrink-0 text-[80px] text-left font-bangers">
          <span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-blue-600">Z</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris">énith </span
          
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-violet">R</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris">ap </span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-fushia">S</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris"
            >trasbourg</span
          >
        </h1>
      </div>
      <div
        class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
      >
        <h2  class="flex-grow-0 flex-shrink-0 text-5xl text-left capitalize text-gris font-faster-one mr-8">
          en extérieur
        </h2>
      </div>
    </div>
  </div>
</div>




<!-- nav vers pages pricipales avec fond violet en gradient-->
<Home1 />

<img src="../../public/bg/fond.png" class="relative " alt="">


<div class="grid-cols-3 flex space-x-52 justify-center -mt-40  mb-16 relative  text-lg font-montserrat">
    <!-- premier bouton -->
     <div class="border-2 border-white hover:bg-white rounded-lg py-5 px-auto w-64 text-center text-white hover:text-violet">
      <a href="../views/Festival.vue" class=""> Le festival</a>
     </div>
    <!-- 2em bouton -->
     <div class="border-2 border-white hover:bg-white rounded-lg py-5 px-auto w-64 text-center text-white hover:text-violet">
    <a href="/artistes" class=""> Artistes</a>
   
    </div>

    <!-- 3em bouton -->
    <div class="border-2 border-white hover:bg-white text-white hover:text-violet  rounded-lg py-5 px-auto w-64 text-center">
        <a href="/programmation" class=""> Programmation </a>
        
    </div>
    
</div>

<div class="mb-20 text-center">
    <Card/>
    


<a href="/festival/#billeterie" class="font-league-gothic text-3xl text-fushia ">
    
        Billeterie

    
    
</a>
</div>

    
</template>

<script></script>