// ParentComponent.vue
<template>
  <div>
    <h1>Parent Component</h1>
    <p>Value from child: {{ myValue }}</p>
    <SyncChildComponent  v-model:value="myValue" />
  </div>
</template>

<script>
import SyncChildComponent from './SyncChildComponent.vue'

export default {
  components: {
    SyncChildComponent
  },
  data () {
    return {
      myValue: 'Initial value'
    }
  }
}
</script>
