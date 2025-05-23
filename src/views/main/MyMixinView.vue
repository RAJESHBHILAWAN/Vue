  <template>
      <div>
        <p>{{ message }}</p>
        <button @click="greet">Greet</button>
      </div>
    </template>

<script>
import myMixin from '@/store/myMixin'

export default {
  mixins: [myMixin],
  created () {
    console.log('Component created!')
  }
}
</script>
