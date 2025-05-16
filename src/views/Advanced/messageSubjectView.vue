<template>
        <div>
          <p>Count: {{ count }}</p>
        </div>
</template>
<script>

import { interval, take } from 'rxjs'
export default {
  data () {
    return {
      count: 0,
      subscription: null
    }
  },
  mounted () {
    const counter = interval(1000).pipe(take(10)) // Emits every second, 10 times
    this.subscription = counter.subscribe((value) => {
      this.count = value
    })
  },
  beforeUnmount () {
    if (this.subscription) {
      this.subscription.unsubscribe() // Prevent memory leaks
    }
  }

}
</script>
