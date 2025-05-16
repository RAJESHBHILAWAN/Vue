<template>
 <h1>{{ title }}</h1>
 <p>{{ des }}</p>
  </template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const title = ref('My title')
    const des = ref('Something')
    return { title, des }
  }
}
</script>
