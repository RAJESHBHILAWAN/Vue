<template>

<button @click="myclick" >Click</button>
{{ res  }}
</template>

<script>
export default {
  data: () => {
    return {
      mydef: 'Base',
      res: ' Anurag '
    }
  },
  methods: {
    myclick () {
      this.res = 'Rajesh' + '  ' + this.mydef
    }
  }

}
</script>
