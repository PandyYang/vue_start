const NotificationCount = {
  template: '<p>Messages: {{messageCount}}<p>',
  data: () => ({
    messageCount: 'loading'
  }),
  mounted () {
    const ws = new WebSocket('/api/messages')
    ws.addEventListener('message', (e) => {
      const data = JSON.parse(e.data)
      this.messageCount = data.messages.length
    })
  }
}

const NotificationCount2 = {
  template: '<p>Messages: {{messageCount}}</p>',
  computed: {
    messageCount () {
      return this.$store.state.messages.length
    }
  },
  mounted () {
    this.$store.dispatch('getMessages')
  }
}
