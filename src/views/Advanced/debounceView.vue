<template>
  <div>
    <input type="text" v-model="searchText" @input="handleInput" placeholder="Search..." />
    <p>Searching for: {{ searchText }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { debounce } from 'lodash'

export default {
  setup () {
    const searchText = ref('')

    // Function to handle the actual search logic
    const search = (text) => {
      // Replace this with your actual search implementation (e.g., API call)
      console.log('Searching for:', text)
    }

    // Debounce the search function to prevent excessive calls
    const debouncedSearch = debounce(search, 5000) // Adjust the delay (in milliseconds) as needed

    // Handle input changes
    const handleInput = (event) => {
      searchText.value = event.target.value
      debouncedSearch(searchText.value)
    }

    return {
      searchText,
      handleInput
    }
  }
}
</script>
