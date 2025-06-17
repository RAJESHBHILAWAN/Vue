// HOC: withLoading.js
import { ref, onMounted } from 'vue'

export default function withLoading (WrappedComponent, fetchData) {
  return {
    name: `withLoading(${WrappedComponent.name})`,
    components: { WrappedComponent },
    setup () {
      const isLoading = ref(false)
      const data = ref(null)

      onMounted(async () => {
        isLoading.value = true
        try {
          data.value = await fetchData()
        } catch (error) {
          console.error('Error fetching data:', error)
        } finally {
          isLoading.value = false
        }
      })

      return {
        isLoading,
        data
      }
    },
    template: `
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="data">
        <WrappedComponent v-bind="$attrs" :data="data" />
      </div>
      <div v-else>
        <p>No data available.</p>
      </div>
    `
  }
}
