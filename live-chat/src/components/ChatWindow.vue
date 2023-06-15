<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="document" class='messages' ref='scroll'>
      <div v-for="doc in formattedDocuments" :key='doc.id' class='single' >
        <span class="create-at">[ {{ doc.createdAt }} ago ] </span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'
export default {
  setup(){
    const { document, error } = getCollection('message')
    const formattedDocuments = computed(() => {
      if(document.value) {
        return document.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time}
        })
      }
    })
    const scroll= ref(null)
    onUpdated(() => {
      scroll.value.scrollTop = scroll.value.scrollHeight
    })
    return {
      document, error, formattedDocuments, scroll
    }
  }
}
</script>

<style>
 .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>