<template>
    <form @submit.prevent='submitHandler'>
      <label>Title:</label>
      <input type="text" required v-model="title">
      <label>Details:</label>
      <textarea required v-model="details"></textarea>
      <button>UPDTAE</button>
  </form>
</template>

<script>
// Challenge
//    - add a submit handler to update the project
//    - make a fetch(PATCH) request to the uri to update the project
//    - redirect to the homepage when done 
export default {
  props: [
    'id'
  ],
  data(){
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/project/'+ this.id
    }
  },
  methods: {
    submitHandler(){
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({ title : this.title, details : this.details })
      })
      .then(this.$router.push('/'))
      .catch(err => console.log(err))
    }
  },
  mounted(){
    fetch(this.uri)
    .then(res => res.json())
    .then(data => {
      this.title = data.title
      this.details = data.details
    })
  }
}
</script>

<style>

</style>