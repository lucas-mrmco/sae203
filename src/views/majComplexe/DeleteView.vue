<template>
<!-- après tant d'effort je rends mon zip (ven. 17h45) avec qqs soucis avec le delete et l'update mais 
    je me suis battu tout le long sans être venu une seul fois vers vous (pourtant je suis italien ! comme vous) -->
    <div class="container">
        <form enctype="multipart/form-data" 
            @submit.prevent="deleteConcerts"
        >
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 class="pt-40" >Suppression concert</h5>
                </div>    
                {{concerts}}
                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne"
                                    v-model="concerts.nom"
                                    required />                    
                            </div>
                            <br/>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Photo</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" ref="file" id="file" 
                                    @change="previewImage"
                                    >
                                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Date </span>
                                </div>
                                <input 
                                    type="date"
                                    class="form-control"
                                    v-model="concerts.date" 
                                    format="yyyy/mm/dd" 
                                    required />                    
                            </div>
                            <br/>
                            <!-- <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Scène</span>
                                </div>
                                <select class="custom-select" v-model="concerts.nom">
                                    <option selected disabled>Sélectionner un nom</option>
                                    <option v-for="scene in listeScene" :key="scene.nom">
                                        {{scene.nom}}
                                    </option>
                                </select>
                            </div> -->
                            <br/>
                        </div>
                    </div>               
                </div>
                <h5 class=" text-fushia text-2xl font-bangers text-center" role="alert">
                        Attention vous allez supprimer ce participant, cette action est irréversible !!
                    </h5>
                <div class="">   
                    <button type="submit" @click.prevent="deleteConcerts()">
                        Suprimer un concert
                    </button>
                    <button class="float-right " >
                        <router-link to="/programmation" >Retour</router-link>
                    </button>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
        uploadString, 
    
    uploadBytes,
    deleteObject,
    listAll          // Permet d'uploader sur le Cloud Storage une image en Base64
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

 
export default {
    name:'DeleteView',
    data() {
        return {
            imageData:null,         // Image prévisualisée
            listeScene:[], 
                      // Liste des pays pour la nationalité du participant
            concerts:{           // Le participant à créer
                nom:null,               // son nom
                           // son prénom
                image:null,             // sa photo (nom du fichier)
                date:null,         // sa date de naissance
            }
        }
    },
    mounted(){ // Montage de la vue
        // Appel de la liste des pays
        this.getScene();
    },
    methods : {
        async getScene(){            
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document pays
            const dbScene = collection(firestore, "scene");
            // Liste des participants triés
            // query permet de faire une requête sur Firebase
            // notement pour filtrer, trier ... des données
            //orderBy permet de préciser sur quel élément trier, et dans quel ordre
            // ici le nom du pays par ordre croissant (asc)            
            const q = query(dbScene, orderBy('nom', 'asc'));
            // Récupération de la liste des pays à partir de la query
            // La liste est synchronisée
            await onSnapshot(q, (snapshot) => {
                this.listeScene = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))  
    console.log("Liste des scenes", this.listeScene);      
            })      
        },

        previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.concerts.image = this.file.name;
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async deleteConcerts(){
            const firestore = getFirestore();
            // Suppresion du participant
            await deleteDoc(doc(firestore, "concerts", this.$route.params.id));

            // Suppresson de l'image
            const storage = getStorage();
            // Référence du fichier de la photo
            let docRef = ref(storage, 'concerts/'+this.concerts.photo);
            // Suppression du fichier
            deleteObject(docRef);

            // redirection sur la liste des participants
            this.$router.push('/programmation');  
             console.log("Liste des concerts", this.listeConcerts);                
        }
    }

}
</script>


