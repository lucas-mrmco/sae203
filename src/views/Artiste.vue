<script setup>
import BoutonTransparent from "../components/buttons/BoutonTransparent.vue"
import BoutonTransparent1 from "../components/buttons/BoutonTransparent.vue";

</script>

<template>
    <div class="bg-violet py-40 text-blanc px-10 lg:px-40 font-montserrat ">
        <h1 class="text-7xl font-bangers text-center mb-20">Fiche Artiste</h1>
        <div class="lg:flex grid-cols-2 space-x-10">
            <div class="w-1/2">
                <h3 class="font-league-gothic text-3xl uppercase">A propos</h3>
                <div class="rounded-lg bg-gray-50 shadow-lg mx-4 mb-8  w-80">
                    <div class="  ">
                        <img
                        src="/rappeurs/gims.webp"
                        class=" w-full rounded-t-lg object-cover"
                        />
                    </div>
                    <div class="">
                        <div>
                            <h3
                            class="px-6 text-3xl text-center font-league-gothic  uppercase text-fushia "
                            >
                            gims
                            </h3>
                        </div>
                    
                    
                    </div>
                
                
                 </div>
                <h4 class="uppercase text-xl font-montserrat font-semibold">Description</h4>
                <p class="text-sm mt-5">GIMS, mondialement connu, commencera par mettre tout le monde d’accord dés le deuxième jour. C’est avec “Zombie” qu’il innaugurera le festival.

                </p>
                <h4 class="uppercase text-xl font-montserrat font-semibold py-5">Apprends - Découvre - Réécoute</h4>
            
                <a href="http://spotify.com"><img src="../../public/icons/spotify.svg" class="mx-auto" alt=""></a>
            </div>
            <div class="w-1/2">
                
                <h3 class="font-league-gothic uppercase text-3xl">concert</h3>
                <!-- <p class="text-sm mt-5">Le rappeur marseillais ouvrera le bal avec le fameux titre : Cosmopolitanie afin de rassembler un maximum de monde avec la meilleur ambiance possible.
                </p> -->

                <h4 class="text-xl uppercase font-semibold mt-5">
                    nom du concert : 
                </h4>
                <div class="flex grid-cols-2 space-x-4 mt-5">
                    <img src="../../public/icons/title.svg" class="" alt="">
                    <p class="text-sm mt-1">GIMS - L’incipit du rap mondial
                    </p>
                </div>
                 
                <h4 class="text-xl uppercase font-semibold mt-20">
                    lieu & horaire : 
                </h4>
                <div class="flex grid-cols-2 space-x-10 mx-auto py-5 justify-center">
                    <!-- lieu  -->
                    <div class="">
                        <img src="../../public/icons/place-white.svg" class="mx-auto stroke-white border-white fill-white" alt="">
                        <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-white ">
                        Scène Monde
                    </p>
                    </div>
                    <!-- heure -->
                    <div class="">
                        <img src="../../public/icons/date-white.svg" class="mx-auto" alt="">
                        <p class="flex-grow font-montserrat text-base text-center font-light uppercase text-white ">
                        Ven. 17 - 14h00
                    </p>
                    
                    
                    </div>


                </div>
                <div class="flex grid-cols-2 space-x-10 mx-auto py-5 justify-center">
                   <a href="/concert"><BoutonTransparent1>En savoir plus sur le concert</BoutonTransparent1></a>
                    <a href="/festival"><BoutonTransparent1>Billetterie du jour</BoutonTransparent1></a>    
                        
                 
                </div>
            </div>
            
            
        </div>
        
        <h3 class="font-league-gothic uppercase text-3xl mt-20">exemples d'albums</h3>

        <!-- <div class="relative flex w-full snap-x overflow-x-auto xl:flex xl:grid-cols-3 xl:snap-normal xl:overscroll-x-none ">
            <div class="w-full shrink-0 rounded-lg shadow-xl">
                 <img src="../../public/fiche-gims/gims1.webp" alt="image concert" />
             </div>
            <div class="w-full shrink-0 rounded-lg shadow-xl">
                <img src="../../public/fiche-gims/gims2.webp" alt="image concert" />
            </div>
            <div class="w-full shrink-0 rounded-lg shadow-xl">
                <img src="../../public/fiche-gims/gims3.webp" alt="image concert" />
            </div>

            
        </div> -->

            <div class="relative flex lg:w-1/2 w-full mt-5 snap-x overflow-x-auto xl:flex xl:justify-start items-start left-[-1px] top-[-1px]">
                <img src="../../public/fiche-gims/gims1.webp" class="self-stretch flex-grow object-cover"/>
                <img src="../../public/fiche-gims/gims2.webp" class="self-stretch flex-grow object-cover"/>
                <img src="../../public/fiche-gims/gims3.webp" class="self-stretch flex-grow object-cover"/>
            </div>
        

</div>
                
</template>