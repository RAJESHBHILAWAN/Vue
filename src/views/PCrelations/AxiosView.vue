<template>
    <div>
      <h1>Data from API</h1>
      {{  data }}
      <!-- <ul>
        <li v-for="item in data" :key="item.id">
          {{ item.name }}
        </li>
      </ul> -->
    </div>
  </template>

<script>
import axios from 'axios'
// import { API_BASE_URL } from '@/constants/constants'
export default {
  name: 'ApiData',
  data () {
    return {
      data: [],
      userData: { name: 'John Doe', email: 'john.doe@example.com' }
    }
  },
  methods: {
    createuser () {
      axios.post('/users', this.userData)
        .then(response => {
          console.log('User created successfully:', response.data)
        })
        .catch(error => {
          console.error('Error creating user:', error)
        })
    }

  },
  mounted () {
    axios.get('https://api.ipify.org/?format=json')
      .then(response => {
        this.data = response.data
        console.log(this.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }
}
</script>
