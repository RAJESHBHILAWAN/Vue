<template>

<div class="container">
    <div class="row">
        <div class="col-sm-2">
            <input v-on:keypress="handleKeyPress" v-on:keyup="handleKeyUp">

        </div>
        <div class="col-sm-2">

     KeyValue      {{ keyvalu }}
     Key up {{keyupvalu  }}
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-sm-2">
            <div v-html="htmlContent"></div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  data: () => {
    return {
      myvalu: '',
      keyupvalu: '',
      keyvalu: '',
      htmlContent: '<p>Hello from v-html</p>'
    }
  },
  methods: {

    handleKeyPress (event) {
      this.keyvalu = event.key
    },
    handleKeyUp (event) {
      this.keyupvalu = event.target.value
    }
  }
}
</script>
