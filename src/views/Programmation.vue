<script setup>
import Card from "../components/Card.vue"
import Home1 from "../components/Home1.vue";
import ProgCard from "../components/ProgCard.vue";
import ProgCard1 from "../components/ProgCard.vue";

</script>

<template>
<!-- hero -->
<div class="flex justify-center items-center w-[1442px] ">
  <div class="flex-grow w-full">
    <div 
      class="flex justify-start items-start   left-8 gap-2.5 "
    >
      <img
        src="../../public/hero/hero-4.webp"
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
          <span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-blue-600">P</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris">rog</span
          
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-violet">r</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris">ama</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-fushia">t</span
          ><span class="flex-grow-0 flex-shrink-0 text-[80px] text-left text-gris"
            >ion</span
          >
        </h1>
      </div>
      <div
        class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
      >
        <h2  class="flex-grow-0 flex-shrink-0 text-5xl text-left capitalize text-gris font-faster-one mr-8">
            Liste Des Concerts
        </h2>
      </div>
    </div>
  </div>
</div>


<img src="../../public/filtre.webp" alt="" class="w-screen mt-20">
<h3 class="my-20 h-20 font-league-gothic uppercase text-3xl -mt-24 text-center">Ajouter des filtres</h3>

<div class="grid-cols-9 mx-6 flex space-x-3 justify-center   mb-16 relative  text-lg font-montserrat">
    <!-- j1 bouton  -->
     <div class="border-2 border-fushia hover:bg-fushia rounded-2xl py-5 px-auto w-64 text-center text-fushia hover:text-white">
      <a href="#j1" class="">Ven. 17</a>
     </div>
    <!-- j2 bouton -->
     <div class="border-2 border-fushia hover:bg-fushia rounded-2xl py-5 px-auto w-64 text-center text-fushia hover:text-white">
    <a href="#j2" class="">Sam. 18</a>
   
    </div>

    <!-- j3 bouton -->
    <div class="border-2 border-fushia hover:bg-fushia text-fushia hover:text-white  rounded-2xl py-5 px-auto w-64 text-center">
        <a href="#j3" class="">Dim. 19</a>
        
    </div>

    <!-- j4 bouton -->
    <div class="border-2 border-fushia hover:bg-fushia text-fushia hover:text-white  rounded-2xl py-5 px-auto w-64 text-center">
        <a href="#j4" class="">Lun. 20</a>
        
    </div>

    <!-- j5 bouton -->
    <div class="border-2 border-fushia hover:bg-fushia text-fushia hover:text-white  rounded-2xl py-5 px-auto w-64 text-center">
        <a href="#j5" class="">Mar. 21</a>
        
    </div>

    <!-- j6 bouton -->
    <div class="border-2 border-fushia hover:bg-fushia text-fushia hover:text-white  rounded-2xl py-5 px-auto w-64 text-center">
        <a href="#j6" class="">Mer. 22</a>
        
    </div>

    <!-- j7 bouton -->
    <div class="border-2 border-fushia hover:bg-fushia text-fushia hover:text-white  rounded-2xl py-5 px-auto w-64 text-center">
        <a href="#j7" class="">Jeu. 23</a>
        
    </div>

    <!-- j8 bouton -->
    <div class="border-2 border-fushia hover:bg-fushia text-fushia hover:text-white visited:bg-yellow-200 rounded-2xl py-5 px-auto w-64 text-center">
        <a href="#j8" class="">Ven. 24</a>
        
    </div>

    <!-- j9 bouton -->
    <div class="border-2 border-fushia hover:bg-fushia text-fushia hover:text-white visited:bg-violet rounded-2xl py-5 px-auto w-64 text-center">
        <a href="#j9" class="">Sam. 25</a>
        
    </div>
</div>


<!-- jour1 -->
<h3 id="j1" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">vendredi 17 juin 2022</h3>
<ProgCard1/>
<!-- jour2 -->
<h3 id="j2" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">samedi 18 juin 2022</h3>

<!-- jour3 -->
<h3 id="j3" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">dimanche 19 juin 2022</h3>

<!-- jour4 -->
<h3 id="j4" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">lundi 20 juin 2022</h3>

<!-- jour5 -->
<h3 id="j5" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">mardi 21 juin 2022</h3>

<!-- jour6 -->
<h3 id="j6" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">mercredi 22 juin 2022</h3>

<!-- jour7 -->
<h3 id="j7" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">jeudi 23 juin 2022</h3>

<!-- jour8 -->
<h3 id="j8" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">vendredi 24 juin 2022</h3>

<!-- jour9 -->
<h3 id="j9" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">samedi 25 juin 2022</h3>



    
</template>
