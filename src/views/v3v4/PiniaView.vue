<template>
    <h1>Counter: {{ counter.count }}</h1>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </template>

<script setup>
import { useCounterStore } from '@/utils/pinia/counter'
const counter = useCounterStore()
</script>
