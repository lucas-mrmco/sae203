<script setup>
import Card from "../components/Card.vue"
import Home1 from "../components/Home1.vue";
import Card1 from "../components/scenes/Card.vue";
import Pass from "../components/Pass.vue";
</script>

<template>
<!-- hero -->
<div class="flex justify-center items-center w-[1442px] ">
  <div class="flex-grow w-full">
    <div 
      class="flex justify-start items-start   left-8 gap-2.5 "
    >
      <img
        src="../../public/hero/hero-1.webp"
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
          <span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-blue-600">L</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris">e Fe</span
          
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-violet">s</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris">ti</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-fushia">v</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris"
            >al</span
          >
        </h1>
      </div>
      <div
        class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
      >
        <h2  class="flex-grow-0 flex-shrink-0 text-5xl text-left capitalize text-gris font-faster-one mr-8">
            À propos de z.R.s
        </h2>
      </div>
    </div>
  </div>
</div>

<!-- partie news -->
<div class="p-20">
  <h3 class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl mt-60">les nouveautés</h3>
  <div class="text-lg font-montserrat space-y-5 w-2/3">

    <p>
        Depuis la dernière session en 2019, les fans ne cessent de s’impatienter pour la reprise de Zénith Rap Strasbourg. Vos artistes vous manquent-ils ?
    </p>
    <p>
        Nous avons regroupés et collectés un maximum de personnels et matériels pour vous fournir le meilleur festival de votre vie.
    </p>
    <p>
        Nous sommes parvenus à tripler le budget de la sesssion 2019 et nous avons eu la chance pour cette année 2022, de viser grand en proposant 2 scènes à l’extérieur. La période de juin s’annonce inoubliable, des artistes du monde entier seront là pour y contribuer. 
    </p>
    <p>
        Suite à ces deux longues années de pandémie, venez profiter et retrouver une vie vertigineuse avec les concerts les plus chaud de France.
    </p>
  </div>
</div>


<img src="../../public/bg/fond.png" class="absolute " alt="">
<Card1/>

<h3 class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl px-20">avant-goût</h3>
<div class="px-20">
  <div class="flex  snap-x overflow-x-auto xl:flex xl:justify-start items-start w-1/2  left-[-1px] top-[-1px]">
      <img src="../../public/festival/fest1.webp" class="self-stretch flex-grow object-cover"/>
      <img src="../../public/festival/fest2.webp" class="self-stretch flex-grow object-cover"/>
      <img src="../../public/festival/fest3.webp" class="self-stretch flex-grow object-cover"/>
  </div>
</div>

<h3 id="billeterie" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl px-20">billeterie</h3>
<Pass/>
    
</template>
