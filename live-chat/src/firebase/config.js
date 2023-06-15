import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZqPVnFQzOZeq251qDf7pCxjKo1gYQdjE",
  authDomain: "fir-vue-eb0e4.firebaseapp.com",
  projectId: "fir-vue-eb0e4",
  storageBucket: "fir-vue-eb0e4.appspot.com",
  messagingSenderId: "60009663846",
  appId: "1:60009663846:web:93c26135690f7541dc8ca7",
  measurementId: "G-73KVQ1PCTV"
};

// init firebase
firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }