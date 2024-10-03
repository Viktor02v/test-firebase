import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz2lmL78CKgA2zMHPxDnoByC7OASsL_9g",
  authDomain: "vue-firebase-auth-02v.firebaseapp.com",
  projectId: "vue-firebase-auth-02v",
  storageBucket: "vue-firebase-auth-02v.appspot.com",
  messagingSenderId: "14517001752",
  appId: "1:14517001752:web:dd0f962c28f6f7ceb96d6d",
  measurementId: "G-EWKX5TW9W2"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')
