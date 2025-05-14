<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>

<script>
import { useCounter } from '@/composables/useCounter'
export default {
  setup () {
    const { count, increment, decrement } = useCounter(10)

    return {
      count,
      increment,
      decrement
    }
  }
}
</script>
