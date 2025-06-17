//App.vue
<template>
  <HOCMyComponent/>
  <HOCAnotherComponent/>
</template>

<script>
import HOCMyComponent from './HOCMyComponent.vue'
import HOCAnotherComponent from './HOCAnotherComponent.vue'
export default {
  components: {
    HOCMyComponent,
    HOCAnotherComponent
  }
}
</script>
