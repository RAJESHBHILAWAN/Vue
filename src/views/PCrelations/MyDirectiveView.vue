<template>

      <input  v-color="color" v-focus />
</template>

<script>
export default {
  directives: {
    focus: {
      mounted (el) {
        el.focus()
      },
      color: {
        mounted (el, binding) {
          el.style.color = binding.value
          console.log(binding.value.color)
        }
      }
    }
  }
}
</script>
