// HOC example: withLogging.js
import { defineComponent, h } from 'vue'

const withLogging = (WrappedComponent) => defineComponent({
  name: `withLogging(${WrappedComponent.name})`,
  setup () {
    console.log(`Component ${WrappedComponent.name} is mounted`)
    return () => h(WrappedComponent)
  }
})

export default withLogging
