import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlI2VrJOoYctBnH2J7haw81wfGj30R1BE",
  authDomain: "doghub-ad016.firebaseapp.com",
  projectId: "doghub-ad016",
  storageBucket: "doghub-ad016.appspot.com",
  messagingSenderId: "790563846258",
  appId: "1:790563846258:web:0826a92c21dabba729eaeb",
  measurementId: "G-1VPS91SE6R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)

export { app, auth, firestore }
 