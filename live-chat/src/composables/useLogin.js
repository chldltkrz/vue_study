import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)

const login = async (email, password) => {
  error.value = null
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)

    error.value = null
    console.log(res)

    return res

  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }

}

const useLogin = () => {
  return { error, login }
}
// to prevent messy export,  
export default useLogin