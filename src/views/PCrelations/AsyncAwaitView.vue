<template>
  <button @click="fetchData">Fetch Data</button>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <ul v-else>
    <li v-for="item in data" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      error: null,
      data: []
    }
  },
  methods: {
    async fetchData () {
      this.loading = true
      this.error = null
      try {
        const response = await this.getDataFromApi()
        this.data = response
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    getDataFromApi () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = true
          if (success) {
            resolve([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }])
          } else {
            reject(new Error('Failed to fetch data'))
          }
        }, 2000)
      })
    }
  }
}
</script>
