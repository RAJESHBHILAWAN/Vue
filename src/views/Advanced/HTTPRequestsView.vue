<template>
    <button @click="getdata">Serve</button>
    <div v-if="isprocessing">
        Processing...
    </div>
    <div v-else-if="myerror" >
        {{ myerror }}
    </div>

     <div v-else >
        <ul v-for="item in mydata" :key="item.id">
            <li>Name: {{ item.name }} UserName: {{ item.username }} </li>
        </ul>
    </div>
</template>

<script>
import { from, of } from 'rxjs'
import { catchError, startWith, switchMap } from 'rxjs/operators'

export default {
  data: () => {
    return {
      mydata: [],
      myerror: '',
      isprocessing: false,
      url: 'https://jsonplaceholder.typicode.com/users'
    }
  },
  methods: {
    getdata () {
      from(fetch(this.url))
        .pipe(
          switchMap(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            return from(response.json())
          }),
          catchError(error => {
            console.error('There was an error!', error)
            return of(null) // Return a default value or rethrow the error
          })
        )
        .subscribe(data => {
          if (data) {
            console.log('Data fetched successfully:', data)
            this.mydata = data
          } else {
            console.log('Failed to fetch data.')
          }
        })
    },
    async getdata1 () {
      try {
        const response = await fetch(this.url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        this.mydata = await response.json()
      } catch (e) {
        this.myerror = e.message
      } finally {
        this.isprocessing = false
      }
    },
    loadData () {
      from(fetch('https://jsonplaceholder.typicode.com/users'))
        .pipe(
          startWith(() => {
            this.isprocessing = true
            this.myerror = null
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
            this.myerror = err.message
            return of(null)
          })
        )
        .subscribe(
          (result) => {
            this.isprocessing = false
            this.mydata = result
          }
        )
    }
  }

}
</script>
