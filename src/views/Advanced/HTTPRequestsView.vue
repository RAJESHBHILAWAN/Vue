<template>
  <div>
    <button @click="loadData">Load Data</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { from, of } from 'rxjs'
import { switchMap, catchError, startWith } from 'rxjs/operators'

export default {
  data () {
    return {
      data: [],
      loading: false,
      error: null
    }
  },
  methods: {
    loadData () {
      from(fetch('https://jsonplaceholder.typicode.com/users'))
        .pipe(
          startWith(() => {
            this.loading = true
            this.error = null
            return of(null)
          }),
          switchMap(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            return from(response.json())
          }),
          catchError(err => {
            this.loading = false
            this.error = err.message
            return of(null)
          })
        )
        .subscribe(
          (result) => {
            this.loading = false
            this.data = result
          }
        )
    }
  }
}
</script>
