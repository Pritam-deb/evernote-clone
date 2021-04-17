import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCusFFSYjvEg6EybCpaeeC6LQIT3zL4i60",
    authDomain: "evernote-console.firebaseapp.com",
    projectId: "evernote-console",
    storageBucket: "evernote-console.appspot.com",
    messagingSenderId: "776554901895",
    appId: "1:776554901895:web:3934d64778852d4bbf6322",
    measurementId: "G-1FWKXL89F8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
//const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore};