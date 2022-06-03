<script setup>
import Bouton from "../Bouton.vue";

</script>

<template>

   
        <!-- 1ere card -->
        <div class="flex flex-col  rounded-[10px] bg-gray-50 shadow-lg max-w-md h-auto ">
            <div class="self-stretch flex-grow-0 flex-shrink-0  ">
                <img
                :src="image"  alt=""
                class="    rounded-tl-[10px] rounded-tr-[10px] object-cover"
                />
            </div>
            <div class="flex-grow">
                <h3
                class="px-6 text-3xl  mt-2  font-league-gothic text-center uppercase text-fushia "
                >
                {{nom}}
                </h3>
            </div>
            <div class="flex grid-cols-2 space-x-2 mx-auto py-5">
                <!-- lieu  -->
                <div class="mx-10">
                    <img src="../../public/icons/date.svg" class="mx-auto" alt="">
                    <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-black ">
                    
                </p>
                </div>
                <!-- heure -->
                <div class="mx-5">
                    <!-- <img :src="image" class="mx-auto" alt=""> -->
                    <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-black ">
                    {{date}}
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
            <Bouton/>
        </div>

</template>


<script>

export default{
    props: {
        nom: String,
        scene: String,
        image: String,
        date: String
    },
    components: { Bouton }
}
</script>