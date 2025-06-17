<template>
  <div>
    <my-component />
  </div>
</template>

<script>
export default {
  components: {
    MyComponent: {
      render (createElement) {
      //  throw new Error('Rendering error in MyComponent')
      },
      renderError (createElement, error) {
        return createElement('div', { style: 'color: red;' }, `Error: ${error.message}`)
      }
    }
  }
}
</script>
