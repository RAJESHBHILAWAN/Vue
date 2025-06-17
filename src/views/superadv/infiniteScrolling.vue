<template>
  <div class="infinite-scroll-container" @scroll="handleScroll" ref="scrollContainer">
    <div v-for="item in items" :key="item.id" class="item">
      {{ item.text }}
    </div>
    <div v-if="loading" class="loading-indicator">
      Loading...
    </div>
  </div>
  <button>cLICK</button>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      loading: false,
      page: 1,
      itemsPerPage: 20
    }
  },
  mounted () {
    this.loadMoreItems()
  },
  methods: {
    async loadMoreItems () {
      if (this.loading) return
      this.loading = true

      // Simulate fetching data from an API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newItems = Array.from({ length: this.itemsPerPage }).map((_, index) => ({
        id: this.items.length + index + 1,
        text: `Item ${this.items.length + index + 1}`
      }))

      this.items.push(...newItems)
      this.loading = false
      this.page++
    },
    handleScroll (event) {
      const container = event.target
      const threshold = 100 // Load more items when within 100px of the bottom

      if (container.scrollHeight - container.scrollTop - container.clientHeight < threshold) {
        this.loadMoreItems()
      }
    }
  }
}
</script>

<style scoped>
.infinite-scroll-container {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
}

.item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.loading-indicator {
  padding: 10px;
  text-align: center;
}
</style>
