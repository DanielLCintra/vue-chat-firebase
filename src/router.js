import Vue from 'vue'
import Router from 'vue-router'
import Chat from './features/chat/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chat.index',
      component: Chat
    }
  ]
})
