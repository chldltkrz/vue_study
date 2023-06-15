import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
     
      //let data = await fetch('http://localhost:3000/posts')
      //if(!data.ok){
      //  throw Error('NO DATA Available')
      //}
      //posts.value = await data.json() 
      const res = await projectFirestore.collection('posts')
      .orderBy('createAt')
      .get()
      posts.value = res.docs.map(doc => {
        //console.log(doc.data())
        return {
          ...doc.data(), id: doc.id
        }
      })
    }
    catch (err){
      error.value = err.message
      console.log(error.value)
    }
  }
  return {
    posts, error, load
  }
}

export default getPosts
