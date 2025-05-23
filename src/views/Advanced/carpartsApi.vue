<template>
  <div class="home">
{{ apiURL }}
<br>
{{ headers }}
<br>
Response: {{ myresponse }}
<br>
Message  {{ myresponsemsg}}
<br>
{{ TPwd }}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Myconstants from '@/globals/constantValues/Myconstants'
export default {
  name: 'HomeView',
  setup () {
    const apiURL = ref(Myconstants.baseAPIurl + 'get/mylogin')
    const Authpwd = ref(Myconstants.AuthorizationPassword)
    const USER_ID = ref(Myconstants.USER_ID)
    const TPwd = ref(Myconstants.TPwd)
    const ipaddress = ref('172.124.11.121')
    const myresponse = ref('')
    const myresponsemsg = ref('')

    const headers = {
      Authorization: Authpwd.value,
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/x-www-form-urlencoded'
    }
    /*   const headers = {
      Authorization: Authpwd.value,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'content-type': 'application/x-www-form-urlencoded'
    } */
    const userData = {
      username: USER_ID.value,
      password: TPwd.value,
      ipaddress: ipaddress.value
    }
    onMounted(() => {
      axios.post(apiURL.value, userData.value, {
        headers: headers.value
      })
        .then((response) => {
          myresponse.value = response.data
          console.log('Response successfully recieved:', response.data)
          myresponsemsg.value = 'Response successfully recieved: ' + response.data
        })
        .catch((error) => {
          console.log(error.response.data)
        })
    })

    return { apiURL, Authpwd, USER_ID, TPwd, ipaddress, headers, userData, myresponse }
  }
}
</script>
