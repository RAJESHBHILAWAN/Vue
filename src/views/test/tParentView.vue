<template>
    <div class="container">
    <div class="row">
        <div class="col-sm-2">
             Parent Message <input type="text" v-model="parentmsg">
        </div>
    </div>
      <div class="row">
        <div class="col-sm-2">
              <tChildVue    :fromparent="parentmsg" @childevent="parentevent"></tChildVue>
        </div>
          <div class="col-sm-2">
            Message from Child click : {{ parenteventmsg }}
         </div>
    </div>
</div>

</template>
<script>
import tChildVue from './tChildVue.vue'
export default {
  components: { tChildVue },
  data: () => {
    return {
      parentmsg: '',
      parenteventmsg: ''
    }
  },
  methods: {
    parentevent (data) {
      this.parenteventmsg = data
    }
  }
}
</script>
