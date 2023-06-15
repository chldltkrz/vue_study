<template>
  <div class="home">
    <FilterNav @filterChange='current = $event' :current='current' />
    <div v-if="projects.length">
      <div v-for="project in filteredProject" :key="project.id">
        <SingleProject :project="project" @delete='handleDelete' @complete='handleComplete'/>
      </div>
    </div>
  </div>
</template>

<script>
//challenges
//    - when the filter changes(current, only show those projects
//    - e.g. if we click 'completed' only show completed project
//    - use a computed property called filterPoejcet to do this

import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'HomeView',
  components: {
    SingleProject,
    FilterNav
  },
  data(){
    return {
      projects: [],
      current: 'all',
    }
  },
  mounted(){
    fetch('http://localhost:3000/project')
    .then(res => res.json())
    .then(dataa => this.projects = dataa)
    .catch(e => console.log(e.message))
  },
  methods: {
    handleDelete(id){
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    },
    handleComplete(id){
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  },
  computed: {
      filteredProject(){
        if(this.current === 'completed'){
          return this.projects.filter(project => project.complete)
        }else if(this.current === 'ongoing'){
          return this.projects.filter(project => !project.complete)
        }
        return this.projects
      }
    }
}
</script>
