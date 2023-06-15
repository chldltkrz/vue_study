import { projectFirestore } from '@/firebase/config'
import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      
      //let data = await fetch('http://localhost:3000/posts')
      //if(!data.ok){
      //  throw Error('NO DATA Available')
      //}
      //posts.value = await data.json()
      const res = await projectFirestore.collection('posts').doc(id).get()
      if(!res.exists){
        throw Error('That Post Not Exist')
      }
      post.value = { ...res.data(), id: res.id }
      console.log(post.value)
    }
    catch (err){
      error.value = err.message
      console.log(error.value)
    }
  }
  return {
    post, error, load
  }
}

export default getPost