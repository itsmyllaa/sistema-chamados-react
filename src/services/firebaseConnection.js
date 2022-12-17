import firebase from 'firebase/app';
import 'firebase/auth';

import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyBq2r-El7HSQVOJa8TEiq-Qq6qgognyUAc",
  authDomain: "sistema-4c956.firebaseapp.com",
  projectId: "sistema-4c956",
  storageBucket: "sistema-4c956.appspot.com",
  messagingSenderId: "819469974888",
  appId: "1:819469974888:web:a3b57daebea7b09fac6add",
  measurementId: "G-Z93C196PSN"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase;