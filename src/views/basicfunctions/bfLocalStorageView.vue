<template>
<div class="container">
    <div class="row">
        <div class="col-sm-2">
            <button @click="click1">Set local</button>
            <button @click="click2">Get local</button>

        </div>
       <div class="col-sm-2">
            <button @click="click3">Set cache</button>
            <button @click="click4">Get cache</button>

        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-2">
             Initial Localstorage:  {{ ls1 }}  -  Final Localstorage:  {{ ls2 }}
        </div>
        <div class="col-sm-2">
             Initial cache:  {{ ca1 }}  -  Final cache:  {{ ca2 }}
        </div>
    </div>
</div>

</template>

<script setup>
import { ref } from 'vue'

import LRU from 'lru-cache'
const ls1 = ref('Rajesh Kumar Verma')
const ls2 = ref('')
const cache = new LRU({
  max: 100, // Maximum number of items in the cache
  ttl: 1000 * 60 * 5 // Time-to-live for cache items (5 minutes)
})
const ca1 = ref('Rajesh Kumar Verma')
const ca2 = ref('')

const click1 = () => {
  ls1.value = 'Hi ls ' + ls1.value
  localStorage.setItem('local', ls1.value)
}
const click2 = () => {
  ls2.value = localStorage.getItem('local')
}

const click3 = () => {
  ca1.value = 'Hi cache ' + ca1.value
  cache.set('cache', ca1.value)
}
const click4 = () => {
  ca2.value = cache.get('cache')
}

</script>
