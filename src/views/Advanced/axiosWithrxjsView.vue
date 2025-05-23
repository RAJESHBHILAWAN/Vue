<template>
  <div v-if="data">
    <p>Data: {{ data }}</p>
  </div>
  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { from } from 'rxjs'
import { catchError } from 'rxjs/operators'

export default {
  name: 'RxjsAxiosExample',
  setup () {
    const data = ref(null)
    const error = ref(null)

    onMounted(() => {
      const source$ = from(axios.get('https://rickandmortyapi.com/api/character'))
        .pipe(
          catchError(err => {
            error.value = err.message
            return []
          })
        )
      source$.subscribe({
        next: (response) => {
          data.value = response.data
        },
        error: (err) => {
          error.value = err
        }
      })
    })

    return { data, error }
  }
}
</script>
