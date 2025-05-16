<template>

<div class="container">
    <div class="row">
        <div class="col-sm-2">
            <input v-model="count">
            From {{ oldvalue }} to {{ newvalue }}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2">
           First  <input v-model="FN"> Last    <input v-model="LN">
         {{ FLN }}
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-2">
           <button   @click="compute" >Incr</button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2">
     From   {{ myval }}  To  {{ doubled }}
        </div>
    </div>
</div>
</template>
<script>
import { watch, ref, computed } from 'vue'

export default {
  data: function () {
    return {
      counter: 1

    }
  },
  methods: {
    clickevent () {
      this.counter += 1
      console.log(this.counter)
    }

  },
  setup () {
    const count = ref(10)
    const oldvalue = ref(0)
    const newvalue = ref(0)
    const FN = ref('Rajesn')
    const LN = ref('Verma')
    const myval = ref(0)
    const doubled = ref(0)
    const compute =
        () => {
          myval.value = myval.value + 1
        }

    watch(count, (n, o) => {
      oldvalue.value = o
      newvalue.value = n
    })

    watch(myval, () => {
      doubled.value = myval.value * 2
    })

    const FLN = computed(
      () => {
        return FN.value + '  ' + LN.value
      }
    )

    return {
      count,
      oldvalue,
      newvalue,
      FN,
      LN,
      FLN,
      doubled,
      myval,
      compute

    }
  }
}
</script>
