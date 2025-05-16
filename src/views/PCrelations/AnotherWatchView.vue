<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Doubled: {{ doubled }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup () {
    const count = ref(0)
    const doubled = ref(0)

    const increment = () => {
      count.value++
    }

    watchEffect(() => {
      doubled.value = count.value * 2
    })

    return {
      count,
      doubled,
      increment
    }
  }
}
</script>
