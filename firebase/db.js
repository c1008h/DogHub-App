import firebase from 'firebase/app';
import 'firebase/database';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); // Replace with your Firebase configuration
}

const database = firebase.database();

export { database };
