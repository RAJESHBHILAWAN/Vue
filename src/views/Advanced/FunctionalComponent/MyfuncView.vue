<!-- <template functional> -->
<template>
  <div>
    <!-- Access props using $attrs -->
    <p>Name: {{$attrs.name}}</p>
    <p>Age: {{$attrs.age}}</p>
    <!-- Render slots -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MyFunctionalComponent',
  props: {
    name: String,
    age: Number
  }
}
</script>
