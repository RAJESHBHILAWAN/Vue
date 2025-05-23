// ChildComponent.vue
<template>
  <div class="container">
    <header>
      <slot name="header">Default header content</slot>
    </header>
    <main>
      <slot>Default main content</slot>
    </main>
    <footer>
      <slot name="footer">Default footer content</slot>
    </footer>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #ccc;
  padding: 10px;
}
header  {
  background-color: #eee;
  padding: 5px;
  text-align: center;
}
 footer {
  background-color: #b82626;
  padding: 5px;
  text-align: center;
  color: white;
}
</style>
