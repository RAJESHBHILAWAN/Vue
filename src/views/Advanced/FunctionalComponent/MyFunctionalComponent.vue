// MyFunctionalComponent.vue
<script>
import { h } from 'vue' // h is for hyperscript

const MyFunctionalComponent = (props, context) => {
  return h('div', { class: 'my-component' }, props.message)
}

MyFunctionalComponent.props = ['message'] // Optional: Define props explicitly

export default MyFunctionalComponent
</script>
