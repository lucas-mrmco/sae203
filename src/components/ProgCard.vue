<script setup>
import Bouton from "../components/Bouton.vue"
import Bouton1 from "../components/Bouton.vue";

</script>

<template>

    <div class="md:grid-cols-2 xl:grid-cols-3 md:px-10 px-3 grid gap-y-10 space-y-10 lg:space-y-0 md:space-x-4 xl:space-x-14 z-20 relative w-full justify-cente">
        <!-- 1ere card -->
        <div class="flex flex-col  rounded-[10px] bg-gray-50 shadow-lg max-w-md h-auto ">
            <div class="self-stretch flex-grow-0 flex-shrink-0  ">
                <img
                src="../../public/concerts/soprano.webp"
                class="    rounded-tl-[10px] rounded-tr-[10px] object-cover"
                />
            </div>
            <div class="flex-grow">
                <h3
                class="px-6 text-3xl  mt-2  font-league-gothic text-center uppercase text-fushia "
                >
                soprano - l'open
                </h3>
            </div>
            <div class="flex grid-cols-2 space-x-2 mx-auto py-5">
                <!-- lieu  -->
                <div class="mx-10">
                    <img src="../../public/icons/date.svg" class="mx-auto" alt="">
                    <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-black ">
                    Scène Fr
                </p>
                </div>
                <!-- heure -->
                <div class="mx-5">
                    <img src="../../public/icons/date.svg" class="mx-auto" alt="">
                    <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-black ">
                    Ven. 17 - 14h00
                </p>
                </div>

            </div>
            <div
            class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0  "
            >
                <p class="flex-grow font-montserrat text-base text-center text-violet px-6 pb-4">
                    Le rappeur marseillais ouvrera le bal avec le fameux titre : Cosmopolitanie afin de ...
                </p>
            </div>
            <Bouton1 />
        </div>
        <!-- 2em card --> 
        <div class="flex flex-col  rounded-[10px] bg-gray-50 shadow-lg max-w-md h-auto ">
            <div class="self-stretch flex-grow-0 flex-shrink-0  ">
                <img
                src="../../public/concerts/kalashkaaris.webp"
                class="    rounded-tl-[10px] rounded-tr-[10px] object-cover"
                />
            </div>
            <div class="flex-grow">
                <h3
                class="px-6 text-3xl  mt-2  font-league-gothic text-center uppercase text-fushia "
                >
                kaaris & kalash criminel - sauvagerie
                </h3>
            </div>
            <div class="flex grid-cols-2 space-x-2 mx-auto py-5">
                <!-- lieu  -->
                <div class="mx-10">
                    <img src="../../public/icons/date.svg" class="mx-auto" alt="">
                    <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-black ">
                    Scène Fr
                </p>
                </div>
                <!-- heure -->
                <div class="mx-5">
                    <img src="../../public/icons/date.svg" class="mx-auto" alt="">
                    <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-black ">
                    Ven. 17 - 18h00
                </p>
                </div>

            </div>
            <div
            class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0  "
            >
                <p class="flex-grow font-montserrat text-base text-center text-violet px-6 pb-4">
                    Le rappeur marseillais ouvrera le bal avec le fameux titre : Cosmopolitanie afin de ...
                </p>
            </div>
            <Bouton1 />
        </div>
        <!-- 3em card -->
        <div class="flex flex-col  rounded-[10px] bg-gray-50 shadow-lg max-w-md h-auto ">
            <div class="self-stretch flex-grow-0 flex-shrink-0  ">
                <img
                src="../../public/concerts/guetta.webp"
                class="    rounded-tl-[10px] rounded-tr-[10px] object-cover"
                />
            </div>
            <div class="flex-grow">
                <h3
                class="px-6 text-3xl  mt-2  font-league-gothic text-center uppercase text-fushia "
                >
                david guetta - first night
                </h3>
            </div>
            <div class="flex grid-cols-2 space-x-2 mx-auto py-5">
                <!-- lieu  -->
                <div class="mx-10">
                    <img src="../../public/icons/date.svg" class="mx-auto" alt="">
                    <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-black ">
                    Le Cercle
                </p>
                </div>
                <!-- heure -->
                <div class="mx-5">
                    <img src="../../public/icons/date.svg" class="mx-auto" alt="">
                    <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-black ">
                    Ven. 17 - 21h00
                </p>
                </div>

            </div>
            <div
            class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0  "
            >
                <p class="flex-grow font-montserrat text-base text-center text-violet px-6 pb-4">
                    Le rappeur marseillais ouvrera le bal avec le fameux titre : Cosmopolitanie afin de ...
                </p>
            </div>
            <Bouton1 />
            
        </div>
        
</div>
</template>