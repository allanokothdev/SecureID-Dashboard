import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getFunctions } from "firebase/functions";
import { getAuth } from 'firebase/auth';

// add firebase config
const firebaseConfig = {
    apiKey: 'AIzaSyCv0sLTEndNXPICMMO0CmCNAVXmHEwyY74',
    authDomain: 'checkedin-africa.firebaseapp.com',
    databaseURL: 'https://checkedin-africa-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'checkedin-africa',
    storageBucket: 'checkedin-africa.appspot.com',
    messagingSenderId: '886687284938',
    appId: '1:886687284938:web:f13ec379c072967a11be33',
    measurementId: 'G-QTDPT0SGYJ',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

const storage = getStorage(app);

// Initialize Firebase Realtime and get a reference to the service
const database = getDatabase(app);
// initialize auth

//const messaging = getMessaging(app);
const auth = getAuth(app);
//const auth = initializeAuth(app);

//const messaging = getMessaging(app);

const functions = getFunctions(app)

export { auth, firestore, database, functions, storage };
