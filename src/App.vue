<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/vue3">Vue3</router-link> |
    <router-link to="/vue4">Vue4</router-link> |
    <router-link to="/tele">Teleport</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/suspense">Suspense</router-link> |
    <router-link to="/comp">Computed</router-link> |
    <router-link to="/rr">Reactive-Ref</router-link> |
    <router-link to="/scriptsetup">ScriptSetUp</router-link> |
    <router-link to="/composable">Composable</router-link> |
    <router-link to="/piniavu">Pinia</router-link> |
    <router-link to="/fragment">Fragment</router-link> |
    <router-link to="/parent">Parent</router-link> |
    <router-link to="/mymixin">MyMixin</router-link> |
    <router-link to="/VParentView">VParentView</router-link> |
    <router-link to="/TwoParentView">TwoParentView</router-link> |

    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
