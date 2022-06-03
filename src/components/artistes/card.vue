<template>
     <div class="rounded-[10px] bg-gray-50 shadow-lg mx-4 mb-8">
            <div class="  ">
                <img
                :src="image"
                class="    rounded-tl-[10px] rounded-tr-[10px] object-cover"
                />
            </div>
            <div class="flex -ml-16 justify-end">
                <div class="justify-inherit ">
                    <h3
                class="px-6 text-3xl  mt-3  font-league-gothic  uppercase text-fushia "
                >
                {{nomArtiste}}
                </h3>
                </div>
                
                
                <BoutonGradient/>
            </div>
            
            
        </div>
</template>

<script>
import BoutonGradient from '../buttons/BoutonGradient.vue'
export default{
    props: {
        nomArtiste: String,
        image: String
    },
    components: { BoutonGradient }
}
</script>