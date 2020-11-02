import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
let ws
export default new Vuex.Store({
  // 状态
  state: {
    messages: []
  },
  // 修改
  mutations: {
    setMessages (state, messages) {
      state.messages = messages
    }
  },
  actions: {
    getMessages ({ commit }) {
      if (ws) {
        return
      }
      ws = new WebSocket('/api/messages')
      ws.addEventListener('message', (e) => {
        const data = JSON.parse(e.data)
        commit('setMessages', data.messages)
      })
    }
  }
})
