<template>
  <Suspense>
    <template #default>
      <component :is="AsyncComponent" />

    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>

import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() =>
  import('@/views/main/DashboardVue.vue')
)

/* export default {
  components: {
    AsyncComponent
  }
} */
</script>
