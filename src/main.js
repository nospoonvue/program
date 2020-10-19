import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false
Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbwt5bWONSrgYJ6kohrkoocQUpbdApv7iESIjXqF/exec"



new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    VueMarkdown
  },
  created()
  {


 
  },
  mounted()
  {

  }
}).$mount('#app')
