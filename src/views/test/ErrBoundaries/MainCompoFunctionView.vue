// App.vue or parent component
<template>
  <div>
      <!--Error boundaries in Vue 3 gracefully handle errors within child components,
   preventing application crashes. They are implemented using the onErrorCaptured hook
   within a dedicated component.-->
    <ErrorBoundary>
      <ComponentThatMayFail />
    </ErrorBoundary>
    <ErrorBoundary>
      <p>Another component that is error protected</p>
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from './ErrorBoundary.vue'
import ComponentThatMayFail from './ComponentThatMayFail.vue'

export default {
  components: {
    ErrorBoundary,
    ComponentThatMayFail
  }
}
</script>
