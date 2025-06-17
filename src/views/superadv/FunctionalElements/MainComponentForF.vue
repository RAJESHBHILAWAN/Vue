<template>
  <DynamicElementView type="h1" content="Hello World" />
  <DynamicElementView type="p" content="This is a paragraph." />
</template>

<script>
import DynamicElementView from './DynamicElementView.vue'

export default {
  components: {
    DynamicElementView
  }
}
</script>
