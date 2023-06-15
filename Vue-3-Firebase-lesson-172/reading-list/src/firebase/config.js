import { initializeApp } from '@firebase/app';
import { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBejXMneRRVEjfS-uBiZMHhKNDv5_snJWI",
  authDomain: "fb9-reading-list-bab11.firebaseapp.com",
  projectId: "fb9-reading-list-bab11",
  storageBucket: "fb9-reading-list-bab11.appspot.com",
  messagingSenderId: "76445337588",
  appId: "1:76445337588:web:4c147c01f79ba2e9b01ba1"
};

//init firebase
initializeApp(firebaseConfig)

//init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }