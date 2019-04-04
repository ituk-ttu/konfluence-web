import Vue from 'vue'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faEnvelope, faHeart, faCoffee, faCopyright, faGlobe, faMapMarkerAlt, faBus, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faEnvelope, faHeart, faCoffee, faCopyright, faGlobe, faMapMarkerAlt, faBus, faPhone);


import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);

import VueScrollTo from 'vue-scrollto'


Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 2000,
  easing: 'ease',
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
  install: function (Vue, options) {
    Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');
