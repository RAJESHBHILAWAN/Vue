// ParentComponent.vue
<template>
  <div>
    <TwoChildView :input-c="inputP" @custom-event="handleCustomEvent"></TwoChildView>

    <br>
    <br>
    <p>Message from child: {{ messageFromChild }}</p>

  </div>
</template>

<script>
import TwoChildView from '@/views/vmodel/TwoChildView.vue'

export default {
  components: {
    TwoChildView
  },
  data () {
    return {
      messageFromChild: '',
      inputP: 'Hi from parent'
    }
  },
  methods: {
    handleCustomEvent (message) {
      this.messageFromChild = message
    }
  }
}
</script>
