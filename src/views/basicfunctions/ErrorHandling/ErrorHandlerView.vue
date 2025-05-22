//MainComponent
<template>

   <div>
      <button @click="doRiskyThing">Do A risky Thing</button>
  <router-link to="/err1">Err1</router-link>

    <p v-if="error" class="error-message">An error occurred: {{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const error = ref(null)

function doRiskyThing () {
  try {
    throw new Error('Did something risky.')
  } catch (err) {
    error.value = err
    console.log('From doRiskyThing ' + error.value)
    return false
  }
}

</script>
