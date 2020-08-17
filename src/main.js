import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "@/components/Header.vue";
import "@/components/Recipe.vue";

/* Vue-fontawesome-icon */
import "font-awesome/css/font-awesome.min.css";

Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
