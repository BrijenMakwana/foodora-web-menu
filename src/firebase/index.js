import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTem_68Ek-GrVRCko-8RX5FN6Vwh2eAkg",
  authDomain: "cibus-c2b89.firebaseapp.com",
  projectId: "cibus-c2b89",
  storageBucket: "cibus-c2b89.appspot.com",
  messagingSenderId: "981350157983",
  appId: "1:981350157983:web:e0bc8475994552f40f9caa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
