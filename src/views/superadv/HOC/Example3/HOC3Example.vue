<template>
    <MyComponentWithLog></MyComponentWithLog>
</template>

<script setup>

const withLog = (WrappedComponent) => {
  return {
    created () {
      console.log(`${WrappedComponent.name} is created`)
    },
    render (h) {
      return h(WrappedComponent, {
        on: this.$attrs,
        props: this.$props,
        scopedSlots: this.$slots
      }, this.$slots.default)
    }
  }
}

// Example component to be wrapped
const MyComponent = {
  name: 'MyComponent',
  props: ['message'],
  template: '<p>{{ message }}</p>'
}

// Wrapped component using the HOC
const MyComponentWithLog = withLog(MyComponent)

</script>
