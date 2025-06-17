<template>
 <p>API URL: {{ apiUrl }}</p>
    <p>Version: {{ version }}</p>
A Component
<AsyncComponent></AsyncComponent>
<hr>

<Suspense>
    <template #default>
       <AsyncComponentWithLoading></AsyncComponentWithLoading>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>

</template>

<script>
import { defineAsyncComponent } from 'vue'
const AsyncComponent = defineAsyncComponent(() =>
  import('./CompoAsyncB.vue')
)
const AsyncComponentWithLoading = defineAsyncComponent({
  loader: () => import('./LoadersyncView.vue'),
  loadingComponent: () => import('./CompoAsyncB.vue'),
  errorComponent: () => import('./ErrorsyncComponent.vue'),
  delay: 200, // Delay before showing the loading component (default: 200ms)
  timeout: 300 // Timeout for loading the component (default: Infinity)
})
export default {
  components: {
    AsyncComponent,
    AsyncComponentWithLoading
  },
  computed: {
    apiUrl () {
      return process.env.VUE_APP_API_URL
    },
    version () {
      return process.env.VUE_APP_VERSION
    }
  }
}
</script>
