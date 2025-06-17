<template>
  <div>
    <p ref="message">{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
    <p>Results:</p>
    <ul>
      <li v-for="(result, index) in results" :key="index">{{ result }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Initial message',
      results: []
    }
  },
  methods: {
    updateMessage () {
      this.message = 'New message'
      this.results.push(this.$refs.message.textContent) // Captures old value
      this.$nextTick(() => {
        this.results.push(this.$refs.message.textContent + ' (after nextTick)') // Captures updated value
      })
    }
  }
}
</script>
