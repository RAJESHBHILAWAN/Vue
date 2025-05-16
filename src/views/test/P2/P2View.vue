<template>
    {{ parentmessage }}
    <C2View ref="myChild">

    </C2View>
      <button @click="updateChildData">Update Child Data</button>

</template>

<script>
import C2View from './C2View.vue'

export default {
  components: { C2View },
  data () {
    return {
      parentmessage: 'cvxcvcxvxcv',
      childData: 'Initial Data'
    }
  },
  methods: {
    updateChildData () {
      this.$refs.myChild.doSomething(this.childData) // Access and update the child component's data
    }
  }
}

</script>
