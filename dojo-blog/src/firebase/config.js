import firebase from "firebase/app";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZqPVnFQzOZeq251qDf7pCxjKo1gYQdjE",
  authDomain: "fir-vue-eb0e4.firebaseapp.com",
  projectId: "fir-vue-eb0e4",
  storageBucket: "fir-vue-eb0e4.appspot.com",
  messagingSenderId: "60009663846",
  appId: "1:60009663846:web:0a553787bd0f0e1adc8ca7",
  measurementId: "G-V78Q5PWB8Q"
};

//init firebase
firebase.initializeApp(firebaseConfig)


//init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore , timestamp} 