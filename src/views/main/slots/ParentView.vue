// ParentComponent.vue
<template>
  <ChildView>
    <template #header>
      <h1>Custom Header from parent</h1>
    </template>
    <template #default>
      <p>Custom main content from parent.</p>
    </template>
    <template #footer>
      <p>Custom Footer from parent</p>
    </template>
  </ChildView>
</template>

<script>
import ChildView from '@/views/main/slots/ChildView.vue'

export default {
  components: {
    ChildView
  }
}
</script>
