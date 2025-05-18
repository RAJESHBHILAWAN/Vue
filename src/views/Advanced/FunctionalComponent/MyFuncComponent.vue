//MainComponent
<template>

   They are defined as plain functions and are useful for simple components that only need to render props.
<br><br><br><br>
  <input v-model="mymessage">
  <MyFunctionalComponent :message="mymessage" @my-event='handleMyEvent'>
    <p>Slot content</p>
  </MyFunctionalComponent>
</template>

<script>
import MyFunctionalComponent from '@/views/Advanced/FunctionalComponent/MyFunctionalComponent.vue'

export default {
  components: { MyFunctionalComponent },
  data () {
    return {
      mymessage: 'Hi from Rajesh'
    }
  },
  methods: {
    handleMyEvent (payload) {
      alert('df')
      console.log('Event emitted with payload:', payload)
    }
  }
}
</script>
