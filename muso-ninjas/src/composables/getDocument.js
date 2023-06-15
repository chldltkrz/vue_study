import { projectFirestore } from "@/firebase/config"
import { ref, watchEffect } from "vue"

const getDocument = (collection, id) => {
  const document = ref(null)
  const error = ref(null)
  
  let documentRef = projectFirestore.collection(collection).doc(id)
  
  // setup realtime listener
  // There is small problem that snapshot is not unsubscribed when the connection is breaking, so that the snapshot is stacking 
  // in order to fix the problem, use the watchEffect function
  const unsub = documentRef.onSnapshot((doc) => {
    if(doc.data()){
      document.value = { ...doc.data(), id: doc.id }
      error.value = null
    } else{
      error.value = "that document is not there"
    }
  }, (err) => {
    document.value = null
    error.value = 'could not fetch data'
  })

  watchEffect((onInvalidate) => {
    // unsubscribe from previous collection when whatcher is stopped(component unmounted)
    onInvalidate(() => {
      unsub()
    })
  }) 
  return {
    document, error
  }
}

export default getDocument