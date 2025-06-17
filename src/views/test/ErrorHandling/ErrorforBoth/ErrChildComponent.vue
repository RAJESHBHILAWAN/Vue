<template>
  <div>
    <h2>Child Component</h2>
    <button @click="throwError">Child Throw Error</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const errorMessage = ref('')

    const throwError = () => {
      throw new Error('Error in Child Component!')
    }

    return {
      throwError,
      errorMessage
    }
  }
}
</script>
