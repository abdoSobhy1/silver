
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBlcfhHzl-t4I0EgkdeFedgCpyf37EKDSo",
    authDomain: "silverjarz-dashboard.firebaseapp.com",
    projectId: "silverjarz-dashboard",
    storageBucket: "silverjarz-dashboard.appspot.com",
    messagingSenderId: "112504342717",
    appId: "1:112504342717:web:51e28f6afe54c836db8fd4",
    measurementId: "G-YXD21JLWCK"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const storage = getStorage(app);