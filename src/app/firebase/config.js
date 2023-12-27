// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB27z4qEy1K7pasL4D8Kmn-r-MLOdn4nSI",
  authDomain: "cipamokolan-157a2.firebaseapp.com",
  projectId: "cipamokolan-157a2",
  storageBucket: "cipamokolan-157a2.appspot.com",
  messagingSenderId: "280038325798",
  appId: "1:280038325798:web:58cdec2f00f61ba7a130e7",
  measurementId: "G-6FLF1G9KQF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
