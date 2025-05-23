<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 <button @click="changecolor">ChangeColor</button>
  <div v-highlight="vcolor">
    This text will be highlighted.
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      vcolor: 'red'
    }
  },
  methods: {
    changecolor () {
      this.vcolor === 'red' ? this.vcolor = 'blue' : this.vcolor = 'red'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
