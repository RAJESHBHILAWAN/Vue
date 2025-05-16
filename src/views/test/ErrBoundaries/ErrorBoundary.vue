// ErrorBoundary.vue
<template>
  <!--Error boundaries in Vue 3 gracefully handle errors within child components,
   preventing application crashes. They are implemented using the onErrorCaptured hook
   within a dedicated component.-->
  <div v-if="error">
    <p>An error occurred: {{ error.message }}</p>
    <button @click="clearError">Try again</button>
  </div>
  <template v-else>
    <slot />
  </template>
</template>

<script>
import { ref, onErrorCaptured } from 'vue'

export default {
  name: 'ErrorBoundary',
  setup (props, { slots, emit }) {
    const error = ref(null)

    onErrorCaptured((err) => {
      error.value = err
      // Optionally, emit the error to a parent component or a global error handler
      emit('error', err)
      return false // Prevents the error from propagating further
    })

    const clearError = () => {
      error.value = null
    }

    return { error, clearError }
  }
}
</script>
