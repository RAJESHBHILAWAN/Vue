    <template>
      <div>
        <input type="text" :value="modelValue" @input="myemit($event.target.value)" />
        <p>Child: {{ modelValue }}</p>

      </div>
    </template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const myemit = (valu) => {
      emit('update:modelValue', valu)
    }
    return { myemit }
  }
}
</script>
