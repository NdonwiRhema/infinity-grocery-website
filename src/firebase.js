// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHpu3tq4MIK_Bux-1jBgI4RITKlrxBuy4",
  authDomain: "infinity-grocery-784e0.firebaseapp.com",
  projectId: "infinity-grocery-784e0",
  storageBucket: "infinity-grocery-784e0.appspot.com",
  messagingSenderId: "382951223847",
  appId: "1:382951223847:web:c36a7aac47b6bbc7415402",
  measurementId: "G-VK18RMFJ53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const Authentic = getAuth(app)
export const db = getFirestore(app) 
export const storage = getStorage(app)

export default Authentic
