// MyComponent.vue
<template>
  <ul>
    <li v-for="item in data" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
