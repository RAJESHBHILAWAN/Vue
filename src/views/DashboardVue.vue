<template>
  <h1>The sidebar is {{ collapsed ? 'closed' : 'open' }}</h1>
  <button @click="toggleSidebar">Toggle Sidebar</button>
  <button @click="localset">Enable</button>
  <button @click="localset1">Disable</button>
<!--  <div>
        <input type="text" v-model="phoneNumber" v-mask="'(###) ###-####'" placeholder="Phone Number">
        <p>Phone Number: {{ phoneNumber }}</p>
      </div> -->
     <p> Phone Number: {{ phoneNumber }}</p>

      <p>{{ $t('message') }}</p>

</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'
import { ref } from 'vue'
export default {

  setup () {
    const phoneNumber = ref('')
    const localset1 = () => {
      localStorage.setItem('token', false)
    }
    const localset = () => {
      localStorage.setItem('token', true)
    }
    return { collapsed, toggleSidebar, localset, localset1, phoneNumber }
  }

}
</script>
