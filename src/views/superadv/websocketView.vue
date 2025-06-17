<template>
  <div>
    <p>{{ message }}</p>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socket: null,
      message: 'Waiting for messages...'
    }
  },
  mounted () {
    this.initWebSocket()
  },
  beforeUnmount () {
    this.closeWebSocket()
  },
  methods: {
    initWebSocket () {
      this.socket = new WebSocket('https://echo.websocket.org/')

      this.socket.onopen = () => {
        console.log('WebSocket connection established.')
        this.message = 'Connected to WebSocket server.'
      }

      this.socket.onmessage = (event) => {
        this.message = event.data
      }

      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error)
        this.message = 'WebSocket error occurred.'
      }

      this.socket.onclose = () => {
        console.log('WebSocket connection closed.')
        this.message = 'WebSocket connection closed.'
      }
    },
    sendMessage () {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send('Hello from Vue!')
      } else {
        this.message = 'WebSocket is not connected.'
      }
    },
    closeWebSocket () {
      if (this.socket) {
        this.socket.close()
      }
    }
  }
}
</script>
