import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC1oGin2eqcUJd2CGbvu8YWQVNyWU2Pr00",
        authDomain: "clone-a1815.firebaseapp.com",
        projectId: "clone-a1815",
        storageBucket: "clone-a1815.appspot.com",
        messagingSenderId: "1073645212735",
        appId: "1:1073645212735:web:6c195ffd6c8dca6441d48a",
        measurementId: "G-W1XXRX6VGG"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };