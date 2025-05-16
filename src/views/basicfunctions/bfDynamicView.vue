<template>
   <div class="container">
    <div class="row">
        <div class="col-sm-2" >
            <button @click="currentView ='HomeView'">Home</button>
            <button @click="currentView = 'bfparentinjectView'">Parent</button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2" >
          <!--
           <keep-alive> in Vue to preserve the state of components when switching between them.
          -->
         <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
        </div>
    </div>
   </div>
</template>

<script>
import HomeView from '../HomeView.vue'
import BfparentinjectView from './provideinject/bfparentinjectView.vue'

export default {
  components: { HomeView, BfparentinjectView },
  data: () => {
    return {
      currentView: 'HomeView'
    }
  }

}

</script>
