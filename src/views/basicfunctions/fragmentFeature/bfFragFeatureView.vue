<template>
    <bffragHeaderView></bffragHeaderView>
 <bfFragMainView></bfFragMainView>
<bfFragFooterView></bfFragFooterView>
</template>

<script>
import bfFragFooterView from './bfFragFooterView.vue'
import bffragHeaderView from './bffragHeaderView.vue'
import bfFragMainView from './bfFragMainView.vue'
export default {
  components: { bfFragFooterView, bfFragMainView, bffragHeaderView }
}
</script>
