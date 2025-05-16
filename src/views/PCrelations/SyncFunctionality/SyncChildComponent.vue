// ChildComponent.vue
<template>
  <div>
    <h2>Child Component</h2>
    <input type="text" :value="value" @input="$emit('update:value', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>
