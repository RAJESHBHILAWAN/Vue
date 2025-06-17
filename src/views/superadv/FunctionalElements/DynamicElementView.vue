<script>

import { h } from 'vue'

export default {
  props: {
    type: {
      type: String,
      default: 'div'
    },
    content: String
  },
  render () {
    return h(
      this.type, // Tag name
      {}, // Attributes
      this.content // Children
    )
  }
}

</script>
