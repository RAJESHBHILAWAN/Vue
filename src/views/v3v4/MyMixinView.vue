<template>
  <div>
        <p>{{ message }}</p>
        <button @click="greet">Greet</button>
      </div>
</template>
<script>
import Mixin2 from '@/utils/mixins/Mixin2'

export default {
  mixins: [Mixin2]
}

</script>
