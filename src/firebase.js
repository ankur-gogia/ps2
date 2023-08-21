
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDLVDrWNLvYVoLuFtJ17o5bJJOpp0aVKBU",
  authDomain: "react-portfolio-website-a577a.firebaseapp.com",
  projectId: "react-portfolio-website-a577a",
  storageBucket: "react-portfolio-website-a577a.appspot.com",
  messagingSenderId: "118926812767",
  appId: "1:118926812767:web:d9d74a0413d8a101405dea",
  measurementId: "G-F7505P54N5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);