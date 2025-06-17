<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>

  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { dataService } from './dataService'

export default {
  setup () {
    const count = ref(0)
    let subscription

    onMounted(() => {
      subscription = dataService.getData().subscribe(data => {
        count.value = data.count
      })
    })

    onUnmounted(() => {
      if (subscription) {
        subscription.unsubscribe()
      }
    })

    const increment = () => {
      dataService.updateData({ count: count.value + 1 })
    }

    return { count, increment }
  }
}
</script>
