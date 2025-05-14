// ParentComponent.vue
<template>
  <ChildView>
    <template #header>
      <h1>Custom Header</h1>
    </template>
    <template #default>
      <p>Custom main content.</p>
    </template>
    <template #footer>
      <p>Custom Footer</p>
    </template>
  </ChildView>
</template>

<script>
import ChildView from '@/views/ChildView.vue'

export default {
  components: {
    ChildView
  }
}
</script>
