// Mixin1.js
const Mixin1 = {
  data: function () {
    return {
      mixinmsg: 'Im Mixin'
    }
  },
  methods: {
    myMethod () {
      this.mixinmsg = 'Im called fron mixin on global click event'
      console.log('This is a method from the mixin')
    }
  },
  created () {
    console.log('Mixin created hook called')
  }
}

export default Mixin1
