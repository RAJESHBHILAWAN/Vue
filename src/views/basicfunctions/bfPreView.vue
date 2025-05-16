<template>
    <div class="container">
    <div class="row">
        <div class="col-sm-4">
          Normal Rendering    {{ capitalizeMessage }}

        </div>
    </div>
      <div class="row">
        <div class="col-sm-4" v-pre>
             Rendering with pre  {{ capitalizeMessage }}
        </div>
    </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      message: 'hello world'
    }
  },
  computed: {
    capitalizeMessage () {
      return this.message.charAt(0).toUpperCase() + this.message.slice(1)
    }
  }
}
</script>
