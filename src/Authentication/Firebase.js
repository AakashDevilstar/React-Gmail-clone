// import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider} from 'firebase/auth'; 

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-1e7b1.firebaseapp.com",
  projectId: "clone-1e7b1",
  storageBucket: "clone-1e7b1.appspot.com",
  messagingSenderId: "305666888413",
  appId: "1:305666888413:web:f73a572d49e2dd0d5b0134",
  measurementId: "G-SGTG2S2FDX"
};

if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}
 
// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebase.initializeApp(firebaseConfig));
const auth=getAuth(firebase.initializeApp(firebaseConfig));
const provider=new GoogleAuthProvider();

export {firebase,provider,db,auth};