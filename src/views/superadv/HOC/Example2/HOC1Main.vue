// App.vue
<template>
  <MyComponentWithLoading />
</template>

<script>
import withLoading from './withLoading'
import HOC1MyComponent from './HOC1MyComponent.vue'

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ])
    }, 1500)
  })
}

const MyComponentWithLoading = withLoading(HOC1MyComponent, fetchData)

export default {
  components: { MyComponentWithLoading }
}
</script>
