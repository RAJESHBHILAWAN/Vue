<script>

import { sideBarWidth } from '@/components/sidebar/state'
import SideBar from './components/sidebar/SideBar.vue'
export default {
  components: { SideBar },
  setup () {
    return { sideBarWidth }
  }
}
</script>
<template>
  <SideBar></SideBar>
  <div :style="{ 'margin-left': sideBarWidth }">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
