<template>
  <input type="number" v-model="count">
  Number {{ count  }} has double value of  {{ dblvalu }}
</template>

<script>

export default {
  data () {
    return {
      count: 0,
      dblvalu: 0
    }
  },
  watch: {
    count: function (o, n) {
      this.dblvalu = this.count * 2
    }
  }

}

</script>
