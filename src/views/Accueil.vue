<script setup>
import Card from "../components/Card.vue"
import Home1 from "../components/Home1.vue";
</script>

<template>
<!-- hero -->
<div class="flex justify-center items-center w-[1442px] ">
  <div class="flex-grow w-full">
    <div 
      class="flex justify-start items-start   left-8 gap-2.5 "
    >
      <img
        src="../../public/hero/hero-3.webp"
        class="flex-grow  w-full -mb-44 "
      />
    </div>
    <div
      class="flex justify-start items-start absolute overflow-hidden gap-2.5 "
    >
    </div>
    <div
      class="flex flex-col justify-start items-start w-full h-92 absolute  top-[320.5px] overflow-hidden gap-[9px] bg-gray-50/90"
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
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-[#3a3a3a]">énith </span
          
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-[#330458]">R</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-[#3a3a3a]">ap </span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-[#8c158e]">S</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-[#3a3a3a]"
            >trasbourg</span
          >
        </h1>
      </div>
      <div
        class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
      >
        <h2  class="flex-grow-0 flex-shrink-0 text-5xl text-left capitalize text-[#3a3a3a] font-faster-one mr-8">
          en extérieur
        </h2>
      </div>
    </div>
  </div>
</div>

<!-- nav vers pages pricipales avec fond violet en gradient-->
<img src="../../public/bg/fond.png" class="-mb-96" alt="">
<Home1 />

<div class="grid-cols-3 flex space-x-40 -mt-96">
    <!-- premier bouton -->
     <div class="">
      <a href="../views/Festival.vue" class="text-xl text-center text-black z-30"> Le festival</a>
    
    <div
      class=" rounded-[10px] border-2 border-black"
    ></div>
     </div>

    <!-- 2em bouton -->
     <div class="">
    <a href="/artistes" class="text-xl text-center text-black z-30"> Artistes</a>
    <div
      class="rounded-[10px] border-2 border-black"
    ></div>
  </div>

    <!-- 3em bouton -->
    <div class="">
        <a href="/programmation" class=" text-xl text-center text-black z-30 border-2 rounded-lg p-3"> Programmation </a>
        <div class="rounded-[10px] border-2 border-black"></div>
    </div>
</div>


<Card/>


</template>

<script></script>