
<template>
<div class="container">
    <div class="row">
        <div class="col-sm-2">
               <p>{{ message }}</p>
               <p>Count: {{ count }}</p>
        </div>
    </div>
     <div class="row">
        <div class="col-sm-2">
        <button @click="increment">Increment</button>
         <input type="text" :value="message" @input="updateMessage($event.target.value)">

        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-2">

        </div>
    </div>
     <div class="row">
        <div class="col-sm-2">

        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-2">
                <button @click="toggleclass">Toggle class</button>
  <div :class="[isActive == true ? 'active' : 'base-class']">
    This element's class is conditionally bound using an array.
  </div>
  <div v-bind:style="{ 'font-size': size + 'px' }">

</div>
        </div>
    </div>
     <div class="row">
        <div class="col-sm-2">
  <button v-on:click="counter += 1">Add 1</button>
<button @click="incrementCounter">Increment</button>
{{ counter }}
        </div>
    </div>
</div>

 <div class="container">
    <div class="row">
        <div class="col-sm-2">
              <button @click="clickformixin">Show Message</button>
{{ mixinmsg }}
        </div>
    </div>

</div>

  </template>

<script>
import Mixin1 from '@/utils/mixins/Mixin1'

export default {

  data () {
    return {
      count: 0,
      message: 'Hello Vue!',
      isActive: true,
      hasError: false,
      size: 21,
      counter: 0
    }
  },
  mixins: [Mixin1],
  methods: {
    increment () {
      this.count++
    },
    updateMessage (newMessage) {
      this.message = newMessage
    },
    toggleclass () {
      this.isActive = !this.isActive
    },
    incrementCounter: function () {
      this.counter++
    },
    clickformixin () {
      this.myMethod() // Accessing mixin's method
    }
  }

}
</script>

<style>
.active {
  color:red;
}
.base-class {
  color:blue;
}
</style>
