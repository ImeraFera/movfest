// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2BuueXSnGE6MANQyagSv9QZVkX_aOAek",
    authDomain: "movfest-583f4.firebaseapp.com",
    projectId: "movfest-583f4",
    storageBucket: "movfest-583f4.appspot.com",
    messagingSenderId: "898923309119",
    appId: "1:898923309119:web:83c5964b63d43498a7b08a",
    measurementId: "G-FN2N0FSCQ2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);