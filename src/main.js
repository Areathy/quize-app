import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from '@/router'
import store from './store'


import './scss/main.scss';


Vue.config.productionTip = false;

import './scss/main.scss';


new Vue({
  router,

  data: {
    isAppReady: false,
  },
  created() {
    this.checkAuth();
  },

  methods: {
    checkAuth() {
      setTimeout(() => {
        this.isAppReady = true;
      }, 1000);
    }
  },

  render: h => h(App),
}).$mount('#app');