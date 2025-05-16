<template>
<Sync2View  v-model="parentmsg" ></Sync2View>
{{ parentmsg }}
</template>

<script>

import Sync2View from './Sync2View.vue'
import { ref } from 'vue'

export default {
  components: { Sync2View },
  setup () {
    const parentmsg = ref('Hi from parent')

    return { parentmsg }
  }
}
</script>
