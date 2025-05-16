// ComponentThatMayFail.vue
<template>
  <button @click="generateError">Generate Error</button>
  <p v-if="!error">Component is working correctly. </p>
  <p v-else>This will not be rendered because of the error.</p>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ComponentThatMayFail',
  setup () {
    const error = ref(null)

    const generateError = () => {
      throw new Error('Something went wrong in ComponentThatMayFail!')
    }

    return { generateError, error }
  }
}
</script>
