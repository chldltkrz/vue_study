import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const user = ref(projectAuth.currentUser)

//whenever user do anything about the credential, it fires
projectAuth.onAuthStateChanged((_user) => {
  console.log("USER STATE CHANGE user is : ", _user)
  user.value = _user
})

const getUser = () => {
  return {
    user
  }
}

export default getUser