<template>
<div>
    <Suspense>
        <template #default>
            <AsyncComponent></AsyncComponent>
        </template>
        <template #fallback>
                Loading...
        </template>
    </Suspense>
</div>
</template>

<script>
import { setTimeout } from 'core-js'
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    AsyncComponent: defineAsyncComponent(
      () => {
        return new Promise(
          (resolve) => {
            setTimeout(
              () => {
                resolve(
                  {
                    template: import('@/views/main/DashboardVue.vue')
                  }
                )
              }, 4000
            )
          }
        )
      }
    )
  }
}
</script>
