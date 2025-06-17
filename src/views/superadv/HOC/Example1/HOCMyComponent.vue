<script>
// Usage example: MyComponent.vue
import { defineComponent } from 'vue'
import withLogging from './withLogging'

const HOCMyComponent = defineComponent({
  name: 'HOCMyComponent',
  template: '<div>HOCMyComponent</div>'
})

export default withLogging(HOCMyComponent)

</script>
