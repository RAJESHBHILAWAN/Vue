<template>
    <div class="container">
    <div class="row">
        <div class="col-sm-2">
              Msg from parent  {{ fromparent }}
        </div>

    </div>
  <div class="row">
        <div class="col-sm-2">
             <input v-model="childdata">
        </div>
    <div class="col-sm-2">
             <button @click="childclick" >Child Click</button>
        </div>

    </div>
</div>

</template>

<script>
export default {
  props: ['fromparent'],
  data: () => {
    return {
      childdata: 'Child data'
    }
  },
  methods: {
    childclick () {
      this.$emit('childevent', this.childdata)
    }
  }

}
</script>
