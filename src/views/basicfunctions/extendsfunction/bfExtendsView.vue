<template>

<div class="container">
    <div class="row">
        <div class="col-sm-2">
                In Vue.js, the extends option allows a component to inherit properties
and methods from another component. It's a way to reuse component logic and structure.
        </div>
    </div>
     <div class="row">
        <div class="col-sm-2">
            <button @click="myclick" >Click</button>
        </div>
    </div>
     <div class="row">
        <div class="col-sm-2">From base: {{ res  }}</div>
    </div>
</div>

</template>

<script>
import BfBaseView from './bfBaseView.vue'

export default {
  extends: BfBaseView

}

</script>
