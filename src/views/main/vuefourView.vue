<template>
    {{ myname }}
    <button @click="incr">Increment</button>
    <button @click="decr">Decrement</button>
    {{ counter }}

</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const myname = ref('Rajesh')
    const counter = ref(0)
    const incr = function () {
      counter.value++
    }
    const decr = () => {
      counter.value--
    }

    return { counter, myname, incr, decr }
  }

}

</script>
