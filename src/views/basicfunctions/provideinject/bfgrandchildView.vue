<template>
 {{ msg }}
</template>

<script>
import { inject } from 'vue'

export default {

  setup () {
    const msg = inject('pmsg')

    return { msg }
  }
}
</script>
