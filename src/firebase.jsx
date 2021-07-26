import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDHKawILofYL1fCzUOwN1-Sa9Qn3S_tXw",
    authDomain: "clone-5aeff.firebaseapp.com",
    projectId: "clone-5aeff",
    storageBucket: "clone-5aeff.appspot.com",
    messagingSenderId: "592410992255",
    appId: "1:592410992255:web:1faba0f7d048334dfc294a",
    measurementId: "G-RY0C8E1XXN"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };