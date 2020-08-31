import Vue from "vue";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from "./App.vue";
import VueAnalytics from "vue-analytics";
import router from "./router";
import store from "./store";

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-176823295-1',
  disabled: false,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
