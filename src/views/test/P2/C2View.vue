<template>

<button @click="childclick">Child 1</button>
{{ $parentmessage }}
</template>

<script>
export default {

  data () {
    return {
      childmessage: 'Hi from child',
      $parentmessage: ''
    }
  },
  methods: {

    childclick () {
      this.$parentmessage = this.$parent.parentmessage
    },
    doSomething () {
      alert('Child method called')
    }
  }

}
</script>
