import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlV7gYBNbG5eYP1UmX1_pIwCIIIijQQJs",
    authDomain: "sae-203-8e29b.firebaseapp.com",
    projectId: "sae-203-8e29b",
    storageBucket: "sae-203-8e29b.appspot.com",
    messagingSenderId: "305347530901",
    appId: "1:305347530901:web:a9b8d20d1ee507ba0acb9c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')
