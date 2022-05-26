// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADjKRk5tAWfZllEcY-dWYSYU-T8Ny1xxA",
    authDomain: "linkedin-clone-d0fce.firebaseapp.com",
    projectId: "linkedin-clone-d0fce",
    storageBucket: "linkedin-clone-d0fce.appspot.com",
    messagingSenderId: "599772956503",
    appId: "1:599772956503:web:2fac830827cde8978ce012"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
