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
        src="../../public/hero/hero-2.webp"
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
          <span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-blue-600">A</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris">rt</span
          
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-violet">i</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris">st</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-fushia">e</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris"
            >s</span
          >
        </h1>
      </div>
      <div
        class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
      >
        <h2  class="flex-grow-0 flex-shrink-0 text-5xl text-left capitalize text-gris font-faster-one mr-8">
            Liste Des Artistes
        </h2>
      </div>
    </div>
  </div>
</div>
<div class="mt-60 mb-20 ">
  <img src="../../public/art/DJs.webp" alt="" class="w-3/4 mx-auto">
  <p class="w-2/3 mx-auto font-montserrat text-sm pt-5">De dj abdel à david guetta, les meilleures tubes défileront dans une ambiance palpitante</p>
  
  <img src="../../public/art/rappeurs.webp" alt="" class="w-3/4 mx-auto mt-16">
  <p class="w-2/3 mx-auto font-montserrat text-sm pt-5">Des stars venues du monde viendront animer le festival dans des concerts en feu, 6ix9ine à Aya Nakamura, en passant par Soprano et Damso, venez découvrir les variétés du Rap au Zénith Rap Strasbourg : en extérieur.</p>


</div>
<img src="../../public/art/grp-surp.webp" alt="" class="w-1/3 mx-auto mb-20">

<img src="../../public/filtre.webp" alt="" class="w-screen">
<h3 class="my-20 h-20 font-league-gothic uppercase text-3xl -mt-24 text-center">Ajouter des filtres</h3>
<!-- jour1 -->
<h3 class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">rap us</h3>

<!-- jour2 -->
<h3 class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">rappeuses fr</h3>

<!-- jour3 -->
<h3 class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">rappeurs fr</h3>


    
</template>
