<template>
<input :value="modelValue" v-on:input="updateEmit($event.target.value)">
</template>

<script>

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const updateEmit = (valu) => {
      emit('update:modelValue', valu)
    }
    return { updateEmit }
  }

}

</script>
