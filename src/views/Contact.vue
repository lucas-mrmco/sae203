<script setup>

import Formulaire from"../components/Formulaire.vue"
</script>

<template>
    <div class="bg-violet px-10 py-20 lg:py-40 lg:px-40 text-blanc md:px-20 font-montserrat">
        <h1 class="lg:text-7xl text-5xl font-bangers text-center ">Contact</h1>
        <div class="lg:flex grid-cols-2 lg:gap-96 justify-center lg:space-x-56">
           <Formulaire />
           <div class="lg:w-80 w-full pt-20">
               <h3 class="uppercase pb-10">Retrouvez nous ici</h3>
               <a href="https://www.google.com/maps/place/Z%C3%A9nith+de+Strasbourg/@48.5924589,7.6771416,14.81z/data=!4m5!3m4!1s0x4796b7b7fa93a565:0x10a183f609a4fe1c!8m2!3d48.5930649!4d7.6871185"><img src="../../../public/local.webp" class="rounded-lg lg:mx-0 mx-auto" alt=""></a>
           </div>
        </div>
            
    </div>

</template>