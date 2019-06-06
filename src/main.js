import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/stylus/index.styl";
import { ERR_OK } from "./api/config.js";
Vue.prototype.ERR_OK = ERR_OK;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
