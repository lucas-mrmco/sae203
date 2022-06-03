<script setup>
import Rapus from "../components/artistes/Rapus.vue"
import Home1 from "../components/Home1.vue";
import Rapus1 from "../components/artistes/Rapus.vue";
import RapWfr from "../components/artistes/RapWfr.vue";
import RapWfr1 from "../components/artistes/RapWfr.vue";
import RapMfr1 from "../components/artistes/RapMfr.vue";
import RapMfr from "../components/artistes/RapMfr.vue";
import Card from "../components/artistes/card.vue";
import Card1 from "../components/artistes/card.vue";
import Card2 from "../components/artistes/card.vue";

</script>

<template>
<!-- hero -->
<div class="flex justify-center items-center w-full ">
  <div class="flex-grow w-full">
    <div 
      class="flex justify-start items-start w-full  "
    >
      <img
        src="../../public/hero/hero-2.webp"
        class="flex-grow sm:pt-20 lg:pt-0  "
      />
    </div>
    <div
      class="flex justify-start items-start absolute overflow-hidden "
    >
    </div>
    <div
      class="flex flex-col justify-start items-start w-full py-3 lg:py-6 absolute  lg:top-80 md:top-60 sm:top-32 top-0 bg-gray-50/90"
    >
      <div
        class="flex flex-col justify-center items-center self-stretch relative "
      >
        <img
          src="../../public/logo/logo-xl-color.png"
          class="flex-grow-0 flex-shrink-0 lg:w-80 md:w-40 w-20"
        />
      </div>
      <div
        class=" justify-center  relative w-full flex-wrap"
      >
        <h1 class="flex-grow-0 flex-shrink-0 text-3xl md:text-5xl lg:text-7xl text-center font-bangers">
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
        class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative"
      >
        <h2  class="flex-grow-0 flex-shrink-0 text-lg md:text-3xl pr-10 lg:text-5xl text-left capitalize text-gris font-faster-one ">
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

<!-- liste synchro des artistes -->

<div class="px-20">
  <div>
            <h5>Liste des artistes - Liste synchronisée</h5>
            </div>
            <form class='mb-3'>
            <h6>Nouveaux artistes</h6>
            <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text">Nom</span>
                </div>
                <input type="text" v-model='nom' class="form-control" required />
                <button class="bg-black " type="button"  @click='createArtistes()' title="Création">
                <i class="fa fa-save fa-lg"></i>
                </button>
            </div>
            </form>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom</th>
                <th scope="col">Image</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
              
                <tr v-for='artistes in listeArtistes' :key='artistes.id'>
                <td>{{artistes.id}}</td>
                <td >
                    <input type='text' v-model='artistes.nomArtiste'  />
                </td>
                <td>
                  <img :src="image" alt="">
                </td>
                <td>
                    <button class="" @click.prevent="updateArtistes(artistes)">
                    <img src="../../public/icons/modif.svg" alt="">
                    </button>
                    <button class="" @click.prevent="deleteArtistes(artistes)">
                    <img src="../../public/icons/delete.svg" alt="">
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
            <hr/>
</div>
<!-- test composant -->
<div class="md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:px-10 px-3 md:grid space-y-10 gap-5 lg:space-y-0 md:space-x-4 xl:space-x-14 z-20 relative w-full justify-center"><RouterLink to="/artiste" v-for="artistes in listeArtistes" :key="artistes"
        ><Card2 :nomArtiste="artistes.nomArtiste" :image="artistes.image" 
      /></RouterLink>
<RouterView/>      </div>



<!-- jour1 -->
<h3 class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">rap us</h3>
<!-- <Rapus1/> -->
<Card/>
<!-- jour2 -->
<h3 class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">rappeuses fr</h3>
<RapWfr1/>
<!-- jour3 -->
<h3 class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">rappeurs fr</h3>
<RapMfr/>

    
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {
   Card,
  },
  data() {
    return {
      listeArtistes: [],
      nom:null
      
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const q = query(dbArtistes, orderBy("nomArtiste", "asc"));
      
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        console.log('listeArtistes', this.listeArtistes);
        this.listeArtistes.forEach(function (artistes) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + artistes.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              artistes.image = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
      });
    },
    
  },
  
};
</script>