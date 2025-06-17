// Define a mixin object
export default {
  data: () => {
    return {
      message: 'Hello from mixin!'
    }
  },
  methods: {
    greet () {
      this.message = 'clicked button'
    }
  },
  created () {
    console.log('Mixin created!')
  }
}
