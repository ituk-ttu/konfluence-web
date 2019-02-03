import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

const VueScrollTo = require('vue-scrollto');
window.$ = window.jQuery = require('jquery')
Vue.use(VueScrollTo, {
  container: "body",
  duration: 2000,
  easing: "ease",
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  render: h => h(App),
}).$mount('#app');
