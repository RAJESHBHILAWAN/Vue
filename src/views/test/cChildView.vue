 <template>

<div class="container">
    <div class="row">

           <div class="col-sm-2">
           Child Input  <input :value="modelValue"  v-on:input="updateemit($event.target.value)">
        </div>
    </div>
</div>

</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const updateemit = (valu) => {
      emit('update:modelValue', valu)
    }
    return { updateemit }
  }
}
</script>
