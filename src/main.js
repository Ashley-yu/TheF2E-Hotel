import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import { required, digits, max, min, regex } from 'vee-validate/dist/rules';
import { extend, localize, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate';
import TW from "vee-validate/dist/locale/zh_TW.json";

Vue.prototype.$http = axios;

setInteractionMode('eager')
extend("required", required);
extend("digits", digits);
extend("max", max);
extend("min", min);
extend("regex", regex);
localize("zh_TW", TW);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
