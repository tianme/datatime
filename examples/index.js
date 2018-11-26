import Vue from 'vue';

import App from './App.vue';

import Picker from '../dist/vue-stone-picker';

import '../dist/vue-stone-picker.css'

Vue.use(Picker);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
