<template>
  <MyFunctionalComponent name="John" age="30">
    <p>Some content inside the component</p>
  </MyFunctionalComponent>
</template>

<script>
import MyFunctionalComponent from '@/views/Advanced/FunctionalComponent/MyfuncView.vue'

export default {
  components: {
    MyFunctionalComponent
  }
}
</script>
