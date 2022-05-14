import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false
import router from "./router";
import store from "./store/store";
import { sync } from "vuex-router-sync"
sync(store, router);
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
