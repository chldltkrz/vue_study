import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJXZes8JSwYLp4BTzWh1Qdlf7fNMJXXCE",
  authDomain: "mujo-ninjas.firebaseapp.com",
  projectId: "mujo-ninjas",
  storageBucket: "mujo-ninjas.appspot.com",
  messagingSenderId: "910813724945",
  appId: "1:910813724945:web:d79f20cff92eba971d0cb0",
  measurementId: "G-3DEQPYWDTJ"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }