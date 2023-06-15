<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
    <div v-if="playlist">
    <ListView :playlists="playlist" />
    </div>
    <router-link :to="{ name: 'CreatePlaylist'}" class="btn"> create New Playlist </router-link>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'
import ListView from '@/components/ListView.vue'

export default {
  components: { ListView },
  setup(){
    const { user } = getUser()
    const { document: playlist } = 
      getCollection('playlists', ['userId', '==', user.value.uid])

    console.log(playlist)

    return{
      playlist
    }
  }
}
</script>

<style scoped>
 .playlist-details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
  }
  .cover {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    padding: 160px;
  }
  .cover img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    max-width: 200%;
    max-height: 200%;
  }
  .playlist-info {
    text-align: center;
  }
  .playlist-info h2 {
    text-transform: capitalize;
    font-size: 28px;
    margin-top: 20px;
  }
  .playlist-info p {
    margin-bottom: 20px;
  }
  .username {
    color: #999;
  }
  .description {
    text-align: left;
  }
  .single-song {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed var(--secondary);
    margin-bottom: 20px;
  }
</style>