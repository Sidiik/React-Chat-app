import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6tgcZEDa3hBp7Grw-6U6JsGPbLdLvqK4",
  authDomain: "messageapp-633be.firebaseapp.com",
  projectId: "messageapp-633be",
  storageBucket: "messageapp-633be.appspot.com",
  messagingSenderId: "204196256762",
  appId: "1:204196256762:web:98a856c91492b7b074e243",
  measurementId: "G-DJSJBPCY9Z",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
