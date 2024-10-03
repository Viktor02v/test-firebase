import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'; // Import App Check

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize App Check with reCAPTCHA v3
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('FIREBASE_APP_CHECK_DEBUG_TOKEN'), // Replace with your reCAPTCHA site key
});

const vueApp = createApp(App)

vueApp.use(createPinia())

vueApp.use(router)

vueApp.mount('#app')
