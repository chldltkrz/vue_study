<template>
  <div class="project" :class='{ complete: project.complete }'>
      <div class="action">
          <h3 @click="showDetail = !showDetail"> {{ project.title }} </h3>
          <div class='icon'>
            <router-link :to="{ name: 'EditProject', params: { id : project.id}}">
                <span class="material-icons-outlined">edit</span>
            </router-link>
            <span @click='deleteProject' class="material-icons-outlined">delete</span>
            <span @click='toggleComplete' class="material-icons-outlined tick">done</span>
          </div>
      </div>
      <div v-if="showDetail" class='detail'>
          <p>{{ project.details }} </p>
      </div>
  </div>
</template>

<script>
export default {
    props: ["project"],
    data(){
        return {
            showDetail: false,
            uri: 'http://localhost:3000/project/'+this.project.id
        }
    },
    methods: {
        deleteProject(){
            fetch(this.uri, {method: 'DELETE'})
            .then(() => this.$emit('delete', this.project.id))
            .catch(err => console.log(err))
        },
        toggleComplete(){
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({complete : !this.project.complete})
            })
            .then(() => this.$emit('complete', this.project.id))
            .catch(err => console.log(err))

        }
    }
}
</script>

<style>
    .project{
        margin: 20px auto;
        background: white;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
        border-left: 4px solid #e90074;
    }
    h3{
        cursor: pointer;
    }
    .action{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .material-icons-outlined{
        font-size: 24px;
        margin-left: 10px;
        color: #bbb;
        cursor: pointer;
    }
    .material-icons-outlined:hover{
        color:#777;
    }
    .project.complete {
        border-left: 4px solid #00ce89
    }
    .project.complete .tick{
        color: #00ce89
    }
</style>