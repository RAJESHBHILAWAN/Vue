<template>

    <div class="container">
        <div class="row">
            <div class="col-sm-4">Counter: {{ cnt }}</div>
        </div>
        <div class="row" >
            <div class="col-sm-4" >
                <button @click="incr()">Incr</button>
                <button @click="decr()">Decr</button>
            </div>

        </div>
        <div class="row" >
            <div class="col-sm-4" >
                Timer : {{ sec }}

        </div>

    </div>
    </div>

</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue'
export default {
  setup () {
    const timer = ref(null)
    const cnt = ref(0)
    const sec = ref(0)
    const incr = () => {
      cnt.value++
    }
    const decr = () => {
      cnt.value--
    }
    onMounted(
      () => {
        timer.value = setInterval(() => {
          sec.value++
        }, 1000)
      }
    )
    onBeforeUnmount(
      () => {
        timer.value = null
      }
    )
    return { cnt, incr, decr, sec, timer }
  }
}
</script>
