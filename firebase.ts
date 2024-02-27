// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgZpE6VuXfSIPG0YKz7w7vyel8YCDLFIw",
    authDomain: "musicista-86562.firebaseapp.com",
    projectId: "musicista-86562",
    storageBucket: "musicista-86562.appspot.com",
    messagingSenderId: "596813513941",
    appId: "1:596813513941:web:f737702c1df172557d4e5c",
    measurementId: "G-XBKNNG82H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const storage = getStorage(app)
export { auth, storage }