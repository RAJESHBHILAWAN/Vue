<template>
  <div>
    <h1>Parent Component</h1>
    <ErrChildComponent />
    <br>
   ErrorMessage {{ errorMessage }}
   <br>
   Error {{ error  }}
  </div>
</template>

<script>
import ErrChildComponent from './ErrChildComponent.vue'
import { ref, onErrorCaptured } from 'vue'
export default {
  components: {
    ErrChildComponent
  },
  setup () {
    // Using onErrorCaptured for central error handling
    const error = ref(null)
    const errorMessage = ref('') // For displaying error message

    onErrorCaptured((err, compInst, info) => {
      console.log('Error:', err)
      error.value = err // Capture the error
      errorMessage.value = `Error occurred in: ${compInst ? compInst.$options.name : 'Unknown'} - ${err.message}` // Display error info
      return false // Prevent further propagation of the error
    })

    return {
      error,
      errorMessage
    }
  }
}
</script>
