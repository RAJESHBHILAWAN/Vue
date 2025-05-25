<template>
  <div class="child-container">
    <p>This is the child component</p>
    <button @click="myMethod">Click Me</button>
    <br>
    Counter:  {{ myvalu }}
    <br>
    General message : {{ mymessage }}
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
const mymessage = ref('Message from child')
const myvalu = ref(0)
const myMethod = () => {
  myvalu.value++
}
defineExpose({
  myMethod,
  mymessage,
  myvalu
})
</script>

<style scoped>
.child-container {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
