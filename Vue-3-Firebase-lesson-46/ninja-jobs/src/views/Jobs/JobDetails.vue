<template>
<div v-if="job">
  <div>
      <h1>{{ job.title}}</h1>
      <p>the job id is {{ id }}</p>
      <p> {{job.details}} </p>
  </div>
</div>
<div v-else>
    <p>Loading!</p>
</div>
</template>

<script>
export default {
    props:['id'],
    mounted(){
        fetch('http://localhost:3000/jobs/'+this.id)
        .then((res) => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err))
    },

    data(){
        return{
            id: this.$route.params.id,
            job: null
        }
    }
}
</script>

<style>

</style>