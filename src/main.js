import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import api from "./api/index";
import { required, digits, max, min, regex } from 'vee-validate/dist/rules';
import { extend, localize, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate';
import TW from "vee-validate/dist/locale/zh_TW.json";
import snackbarPlugin from "./plugins/snackbar";

setInteractionMode('eager')
extend("required", required);
extend("digits", digits);
extend("max", max);
extend("min", min);
extend("regex", regex);
localize("zh_TW", TW);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.use(api);
Vue.use(snackbarPlugin, { store });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
