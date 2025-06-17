<script>
// Another component using the same HOC: AnotherComponent.vue
import { defineComponent } from 'vue'
import withLogging from './withLogging'

const HOCAnotherComponent = defineComponent({
  name: 'HOCAnotherComponent',
  template: '<div>Another Component</div>'
})

export default withLogging(HOCAnotherComponent)
</script>
