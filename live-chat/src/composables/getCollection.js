import { projectFirestore } from "@/firebase/config"
import { ref, watchEffect } from "vue"

const getCollection = (collection) => {
  const document = ref(null)
  const error = ref(null)
  
  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')
  
  // setup realtime listener
  // There is small problem that snapshot is not unsubscribed when the connection is breaking, so that the snapshot is stacking 
  // in order to fix the problem, use the watchEffect function
  const unsub = collectionRef.onSnapshot((snap) => {
    let result = [] 
    snap.docs.forEach(doc => {
      doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
    })
    document.value = result
    error.value = null
  }, (err) => {
    console.log(err.message)
    document.value = nullerror.value = 'could not fetch data'
  })

  watchEffect((onInvalidate) => {
    // unsubscribe from previous collection when whatcher is stopped(component unmounted)
    onInvalidate(() => {

    })
  }) 
  return {
    document, error
  }
}

export default getCollection