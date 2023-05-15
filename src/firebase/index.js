// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmy5ws09mDL93rY75ZrR4Do6TqVWhXhG8",
  authDomain: "vue-fire-auth-f6001.firebaseapp.com",
  projectId: "vue-fire-auth-f6001",
  storageBucket: "vue-fire-auth-f6001.appspot.com",
  messagingSenderId: "867297183831",
  appId: "1:867297183831:web:5dee4472d231423c7d3b12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}