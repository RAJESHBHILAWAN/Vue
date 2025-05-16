// ChildComponent.vue
<template>
  <div>

    <grandchildView></grandchildView>
  </div>
</template>

<script>
import grandchildView from './bfgrandchildView.vue'
export default {
  components: { grandchildView }

}
</script>
