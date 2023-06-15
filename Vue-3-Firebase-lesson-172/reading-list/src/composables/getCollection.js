import { ref, watchEffect } from 'vue'

//firebase imports 
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

const getCollection = (c) => {
  const documents = ref(null)

  //collection reference

  let colRef = collection(db, c)
  
  const unsub = onSnapshot(colRef, snapshot => {
    let res = []
      snapshot.docs.forEach(doc => {
        res.push({ ...doc.data(), id: doc.id })
      })

      //update values
      documents.value = res
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { documents }
}

export default getCollection