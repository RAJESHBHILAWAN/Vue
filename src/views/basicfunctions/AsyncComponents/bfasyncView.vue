<template>
<div>
   <AsyncComponent1></AsyncComponent1>
    <Suspense>
        <template #default>
          <component :is="AsyncComponent"/>
            <!-- <AsyncComponent></AsyncComponent> -->
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
const AsyncComponent = defineAsyncComponent(
  () => {
    return new Promise(
      (resolve) => {
        setTimeout(
          () => {
            resolve(
              {
                // template : '<div>sdsdsd</div>'
                loader: () => import('../../HomeView.vue')
              }
            )
          }, 4000
        )
      }
    )
  }
)
const AsyncComponent1 = defineAsyncComponent(() =>
  import('../../HomeView.vue'))
export default {
  components: { AsyncComponent, AsyncComponent1 }
}
</script>
