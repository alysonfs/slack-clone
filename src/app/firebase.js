import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, addDoc, getDoc, setDoc,
  serverTimestamp, query, orderBy, getDocs, doc
} from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBacnNaZ1sj7S7Y2cXxK09sZVje-Z0MKyc",
  authDomain: "slack-clone-623a6.firebaseapp.com",
  projectId: "slack-clone-623a6",
  storageBucket: "slack-clone-623a6.appspot.com",
  messagingSenderId: "790772660515",
  appId: "1:790772660515:web:9f93cfd84dd8666c863496"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()
const provider = new GoogleAuthProvider();
const auth = getAuth()
export {
  app, db, collection, 
  addDoc, provider, serverTimestamp,
  query, orderBy, getDocs, setDoc,
  getDoc, doc, auth, signInWithPopup
}