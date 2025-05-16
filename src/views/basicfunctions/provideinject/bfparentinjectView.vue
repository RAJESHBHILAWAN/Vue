<template>

<childinjectView></childinjectView>

</template>

<script>
import { provide, ref } from 'vue'
import childinjectView from './bfchildinjectView.vue'
export default {
  components: { childinjectView },
  setup () {
    const mymessage = ref('My parent message')
    const msg = provide('pmsg', mymessage)
    return { msg }
  }

}
</script>
