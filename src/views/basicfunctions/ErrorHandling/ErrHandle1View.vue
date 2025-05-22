<template>
  <div>
      <router-link to="/ErrHandle">....</router-link>

    <button @click="triggerError">Trigger Error in Child</button>
    <ChildComponent v-if="!error" />
    <p v-else class="error-message">An error occurred: {{ error.message }}</p>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from 'vue'

export default {
  components: {
    ChildComponent: {
      template: '<div>Child Component</div>',
      mounted () {
        // Simulate an error on mount
        if (Math.random() < 0.5) {
          throw new Error('Error from Child Component')
        }
      }
    }
  },
  setup () {
    const error = ref(null)
    const errorMessage = ref('')
    onErrorCaptured((err, instance, info) => {
      error.value = err

      // Handle the error (e.g., log it, display a message)
      console.log('Captured error:', err)
      console.log('Component instance:', instance)
      console.log('Error info:', info)

      // Prevent the error from propagating further
      return false
    })

    const triggerError = () => {
      // alert('hi')
      try {
        // Simulate error
        throw new Error('Intentional error from button click')
      } catch (error) {
        errorMessage.value = error.message
        console.log('Caught error:', error.message)
        return false
      }
    }

    return { error, triggerError, errorMessage }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
