<template>
  <div>
    <button @click="toggleShow">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">
        This text will fade in and out.
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
