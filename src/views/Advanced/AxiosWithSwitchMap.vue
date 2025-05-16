<template>
  <div>
    <h1>Data from API</h1>
    <ul v-if="items.length > 0">
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
    <p v-else>Loading data...</p>
    <p v-if="error">Error: {{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: [],
      error: null
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.items = response.data
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
