<script setup>
import BoutonGradient from "../buttons/BoutonGradient.vue"
import BoutonGradient1 from "../buttons/BoutonGradient.vue";
</script>

<template>
<div class="md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:px-10 px-3 md:grid space-y-10 gap-5 lg:space-y-0 md:space-x-4 xl:space-x-14 z-20 relative w-full justify-center">
    <!-- 3em card -->
        <div class="rounded-[10px] bg-gray-50 shadow-lg max-w-md h-auto ">
            <div class="self-stretch flex-grow-0 flex-shrink-0  ">
                <img
                src="../../../public/rappeurs/travis.webp"
                class="    rounded-tl-[10px] rounded-tr-[10px] object-cover"
                />
            </div>
            <div class="flex -ml-10 justify-end">
                <div class="justify-inherit ">
                    <h3
                class="px-6 text-3xl  mt-2  font-league-gothic  uppercase text-fushia "
                >
                travis scott
                </h3>
                </div>
                
                
                <BoutonGradient1/>
            </div>
            
            
        </div>
    <!-- 3em card -->
        <div class="rounded-[10px] bg-gray-50 shadow-lg max-w-md h-auto ">
            <div class="self-stretch flex-grow-0 flex-shrink-0  ">
                <img
                src="../../../public/rappeurs/sixnine.webp"
                class="    rounded-tl-[10px] rounded-tr-[10px] object-cover"
                />
            </div>
            <div class="flex -ml-10 justify-end">
                <div class="justify-inherit ">
                    <h3
                class="px-6 text-3xl  mt-2  font-league-gothic  uppercase text-fushia "
                >
                6ix9ine
                </h3>
                </div>
                
                
                <BoutonGradient1/>
            </div>
            
            
        </div>
    <!-- 3em card -->
        <div class="rounded-[10px] bg-gray-50 shadow-lg max-w-md h-auto ">
            <div class="self-stretch flex-grow-0 flex-shrink-0  ">
                <img
                src="../../../public/rappeurs/juice.webp"
                class="    rounded-tl-[10px] rounded-tr-[10px] object-cover"
                />
            </div>
            <div class="flex -ml-10 justify-end">
                <div class="justify-inherit ">
                    <h3
                class="px-6 text-3xl  mt-2  font-league-gothic  uppercase text-fushia "
                >
                juice wrld
                </h3>
                </div>
                
                
                <BoutonGradient1/>
            </div>
            
            
        </div>
</div>
</template>