import Vue from 'vue'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import VueAnalytics from 'vue-analytics'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faHeart, faCoffee, faCopyright, faGlobe, faMapMarkerAlt, faBus, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faEnvelope, faHeart, faCoffee, faCopyright, faGlobe, faMapMarkerAlt, faBus, faPhone);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const VueScrollTo = require('vue-scrollto');
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

Vue.use({
  install: function(Vue, options){
    Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
  }
});

Vue.use(VueAnalytics, {
  id: 'UA-134658763-1'
});

new Vue({
  render: h => h(App),
}).$mount('#app');
