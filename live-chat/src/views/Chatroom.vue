<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
// get the current user using the getUser composable
// watch the current user for changes
// redirect the user to the Welcome page when they are logged out 
import NewChatForm from '../components/NewChatForm.vue'
import Navbar from '../components/Navbar.vue'
import ChatWindow from '../components/ChatWindow.vue'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup(){
    const router = useRouter()
    let { user } = getUser()
    // Watching a value constantly and if change is detected, then fire the callback function
    watch(user, () => {
      if(!user.value){
        router.push({ name: 'Welcome'})
      }
    })
    return{
      
    }
  }
}
</script>

<style>

</style>