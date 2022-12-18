import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_1uPMG7rDmuuaZSccwDBQFvEIkzVOnjE",
    authDomain: "chat-app-582c4.firebaseapp.com",
    projectId: "chat-app-582c4",
    storageBucket: "chat-app-582c4.appspot.com",
    messagingSenderId: "1072000072075",
    appId: "1:1072000072075:web:e934e041c9294c2855578e",
    measurementId: "G-090Y7DG6GF"
  };

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;