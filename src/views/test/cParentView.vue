 <template>

<div class="container">
    <div class="row">
        <div class="col-sm-2">
           Parent data <input v-model="pdata">

        </div>
         <div class="col-sm-2">

            VModel Data:     {{ pdata }}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2">
             <CChildView v-model="pdata"></CChildView>
        </div>
    </div>
</div>

 </template>

<script>
import CChildView from './cChildView.vue'
import { ref } from 'vue'
export default {
  components: { CChildView },
  setup () {
    const pdata = ref('')
    return { pdata }
  }

}
</script>
