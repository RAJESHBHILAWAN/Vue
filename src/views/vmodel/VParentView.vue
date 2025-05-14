    <template>
      <div>
        <VChildView v-model="parentValue" />
       Parent : {{ parentValue }}
        <input type="text" v-focus >
      </div>
    </template>
<script>
import { VChildView } from '@/views/vmodel/VChildView.vue'
import { ref } from 'vue'

export default {
  components: { VChildView },
  directives: [focus],
  setup () {
    const parentValue = ref('Initial Value')
    return { parentValue }
  }
}
</script>
