<script setup>
import Home1 from "../components/Home1.vue";
import ProgCard from "../components/ProgCard.vue";
import ProgCard1 from "../components/ProgCard.vue";
import ProgCard2 from "../components/ProgCard.vue";
import ProgCard3 from "../components/concerts/ProgCard.vue";

</script>

<template>
<!-- hero -->
<div class="flex justify-center items-center w-full ">
  <div class="flex-grow w-full">
    <div 
      class="flex justify-start items-start w-full   "
    >
      <img
        src="../../public/hero/hero-4.webp"
        class="flex-grow sm:pt-20 lg:pt-0 "
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
          class="flex-grow-0 flex-shrink-0 lg:w-80 md:w-40 w-20 "
        />
      </div>
      <div
        class=" justify-center  relative w-full flex-wrap"
      >
        <h1 class="flex-grow-0 flex-shrink-0 text-3xl md:text-5xl lg:text-7xl text-center font-bangers">
          <span class="flex-grow-0 flex-shrink-0 text-left text-blue-600">P</span
          ><span class="flex-grow-0 flex-shrink-0  text-left text-gris">rog</span
          
          ><span class="flex-grow-0 flex-shrink-0 text-left text-violet">r</span
          ><span class="flex-grow-0 flex-shrink-0 text-left text-gris">ama</span
          ><span class="flex-grow-0 flex-shrink-0 text-left text-fushia">t</span
          ><span class="flex-grow-0 flex-shrink-0 text-left text-gris"
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
<div class="px-20 flex-col flex font-montserrat text-lg text-violet">
  <a  href="/create"> Création</a>
<a href="/delete"> Suppression</a>
<a href="/liste"> Liste</a>
<a href="/update"> Modification</a>

</div>

<div class="relative mb-32 px-20">
  <button class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
    <span>Catégorie</span>
    <svg class="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </button>
  <div class="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg">
    <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#monde">Scene monde</a>
    <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#fr">Scene fr</a>
    <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#battle">Scene le cercle</a>
  </div>
</div>


<!-- jour1 -->
<h3 id="j1" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">vendredi 17 juin 2022</h3>
<ProgCard1/>
<!-- jour2 -->
<h3 id="j2" class="my-20 h-20 text-fushia uppercase font-league-gothic text-3xl ml-20">samedi 18 juin 2022</h3>

<!-- test composant -->
<div class="md:grid-cols-2 xl:grid-cols-3 md:px-10 px-3 grid gap-y-10 space-y-10 lg:space-y-0 md:space-x-4 xl:space-x-14 z-20 relative w-full justify-cente">
  <RouterLink to="/concert" v-for="concerts in listeConcerts" :key="concerts"
        ><ProgCard3 :nom="concerts.nom" :date="concerts.date" :image="concerts.image"  
      /></RouterLink>
<RouterView/>      </div>

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
  components: { ProgCard3

  },
  data() {
    return {
      listeConcerts: [],
      nom:null
      
    };
  },
  mounted() {
    this.getConcerts();
  },
  methods: {
    async getConcerts() {
      const firestore = getFirestore();
      const dbConcerts = collection(firestore, "concerts");
      const q = query(dbConcerts, orderBy("date", "asc"));
      
      await onSnapshot(q, (snapshot) => {
        this.listeConcerts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        console.log('listeConcerts', this.listeConcerts);
        this.listeConcerts.forEach(function (concerts) {
          const storage = getStorage();
          const spaceRef = ref(storage, "concerts/" + concerts.image);
          getDownloadURL(spaceRef)
            .then((url) => {
             concerts.image = url;
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