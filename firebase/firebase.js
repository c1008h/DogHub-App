import * as firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.YOUR_API_KEY,
    authDomain: process.env.YOUR_AUTH_DOMAIN,
    databaseURL: process.env.YOUR_DATABASE_URL,
    projectId: process.env.YOUR_PROJECT_ID,
    storageBucket: process.env.YOUR_STORAGE_BUCKET,
    messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,
    appId: process.env.YOUR_APP_ID,
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export default firestore;
