<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2">
                 Im another component and im working fine

            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <b>Code refrence:</b> {{ mymessage }}

            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const mymessage = ref('My code reference is also wroking fine.')

    return { mymessage }
  }
}
</script>
