import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import socketIo from 'vue-socket.io';


const PORT = process.env.NODE_ENV !== 'production' ? '//localhost:3000' : '/';

Vue.use(socketIo, PORT, store);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
