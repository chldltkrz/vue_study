<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts"/>
    </div>
    <div v-else> 
      <Spinner />
    </div>
  </div>
</template>

<script>
// challenge
//  -create a tag route, which the tag as a route paramater (/tag/:tag)
//  -in the Tag comp, make a request for all the posts
//  - use a computed property to return an array of posts which have the current tag
//  - use the useRoute function to access the tag route parameter
//  - use the POstList component to output the required posts
//  - show the spinner until the data is loaded, and error if there is one 
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  components: { PostList, Spinner, TagCloud },

  setup(){
    const route = useRoute()
    const { posts, error, load } = getPosts()
    load()

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag))
    })
    return { error, posts, postsWithTag }
  }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>