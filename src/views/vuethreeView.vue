<template>
    {{ myname }}
    <button @click="incr">Increment</button>
    {{ counter }}
</template>

<script>
export default {
  data: function () {
    return {
      myname: 'Rajesh',
      counter: 1

    }
  },
  methods: {
    incr () {
      this.counter++
    }
  }
}

</script>
