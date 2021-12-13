import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRS_dHIOlInu6Pdh4HVY7ieoQ04NRdb68",
  authDomain: "gift-list-cf3ac.firebaseapp.com",
  projectId: "gift-list-cf3ac",
  storageBucket: "gift-list-cf3ac.appspot.com",
  messagingSenderId: "779476503111",
  appId: "1:779476503111:web:f156bbf1d8beed3cb33f62"

};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("/list");

export default db;
