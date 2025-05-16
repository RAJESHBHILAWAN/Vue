<template>
  <div>Count: {{ count }}</div>
</template>

<script>
import { useStore, mapGetters } from 'vuex'
import { computed } from 'vue'

export default {
  computed: {
    ...mapGetters(['getCount']),
    countAlias () {
      return this.getCount
    },
    countComputed () {
      const store = useStore()
      return computed(() => store.getters.getCount)
    }
  },
  setup () {
    const store = useStore()
    const count = computed(() => store.getters.getCount)
    return { count }
  }
}
</script>
