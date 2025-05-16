 <template><div>
          <p>Count: {{ count }}</p>
        </div></template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { interval, take } from 'rxjs'

export default {
  setup () {
    const count = ref(0)
    let subscription = null

    onMounted(() => {
      const counter = interval(1000).pipe(take(10))
      subscription = counter.subscribe((value) => {
        count.value = value
      })
    })

    onBeforeUnmount(() => {
      if (subscription) {
        subscription.unsubscribe()
      }
    })

    return { count }
  }

}

</script>
