<template>
    <Suspense>
      <div v-if="dataLoaded">
        <h1>Data</h1>
        <p>{{ data.message }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <ErrorDisplay v-if="error" />
    </Suspense>
  </template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const data = ref(null)
    const dataLoaded = ref(false)
    const error = ref(null)

    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const jsonData = await response.json()
        data.value = jsonData
        dataLoaded.value = true
      } catch (e) {
        error.value = e
      }
    })
    return {
      data,
      dataLoaded,
      error
    }
  },
  components: {
    ErrorDisplay: {
      template: '<div>Error occurred</div>'
    }
  }
}
</script>
