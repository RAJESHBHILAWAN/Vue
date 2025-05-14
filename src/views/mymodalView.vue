<template>
  <div>
    <button @click="showModal = true">Open Modal</button>

    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>Modal Title</h2>
          <p>Modal content goes here.</p>
          <button @click="showModal = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
