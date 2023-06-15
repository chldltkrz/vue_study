import { projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const useCollection = (collection) => {
  // need local variable not global variable error, 
  const error = ref(null)
  const isPending = ref(false)

  const addDoc = async (doc) => {
    error.value = null 
    isPending.value = true

    try {
      const res = await projectFirestore.collection(collection).add(doc)
      isPending.value = false
      return res
    } catch (err) {
      console.log(err.message)
      error.value = 'could not send the message'
      isPending.value = false

    }
  }
  return {
    addDoc, error, isPending
  }
}

export default useCollection