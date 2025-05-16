<template>
  <button @click="increment">Increment</button>
  <button @click="incrementAsync">Increment Async</button>
{{count}}
  <button @click="decrement">Decrement</button>
  <button @click="decrementAsync">Decrement Async</button>

</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup () {
    const store = useStore()

    const increment = () => {
      store.commit('increment')
    }
    const decrement = () => {
      store.commit('decrement')
    }
    const incrementAsync = () => {
      store.dispatch('incrementAsync')
    }
    const decrementAsync = () => {
      store.dispatch('decrementAsync')
    }

    const count = computed(() => store.getters.getCount)

    return { increment, incrementAsync, decrement, decrementAsync, count }
  }
}
</script>
