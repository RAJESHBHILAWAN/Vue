// ChildComponent.vue
<template>
  <button @click="sendMessage">Send Message to Parent</button>
  <br> <br> <br>
 Message from parent {{ inputC }}
 <br>
</template>

<script>
export default {
  props: ['inputC'],
  methods: {
    sendMessage () {
      this.$emit('custom-event', 'Hello from child!')
    }
  }
}
</script>
