<template>
  <div class="home">
    <div v-if="document">
      <div v-for="docu in document" :key="docu.id">{{ docu.title }}</div>
      <ListView :playlists='document' />
    </div>
    <div v-if="error" class="error">Could not fetch Data {{ error }}</div>
  </div>
</template>

<script>
// get realtime datat from the playlists collection 
// olutput 2 conditional item -error or playlist titles
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView.vue'

export default {
  name: 'HomeView',
  components: { ListView },
  setup(){
    const { document, error } = getCollection('playlists')
   
   return{
     document, error
   }
  }
}
</script>
