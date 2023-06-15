<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/senpai.jpg" alt="Senpai">
      <h1><router-link :to="{ name: 'home'}">Muso Ninjas</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name : 'CreatePlaylist'}">Create Playlist</router-link>
          <router-link :to="{ name : 'UserPlaylist'}">MyPlaylist</router-link>
          <span>Hi there, {{ user.displayName }}</span>
          <button @click='handleSubmit'> Logout</button>
        </div>
        <router-link v-if="!user" class='btn' :to="{ name: 'Signup'}">Signup</router-link>
        <router-link v-if="!user" class='btn' :to="{ name: 'Login'}">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

export default {
  setup(){
    const { logout, error, isPending } = useLogout()
    const { user } = getUser() 
    const router = useRouter()
    
    const handleSubmit = async () => {
      await logout()
      if(!error.value){
        console.log('user logged out')
        router.push('Login')
      }
    }
    return{ handleSubmit, user }
  }
}
</script>

<style scoped>
.navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>