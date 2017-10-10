// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    userInfo: {},
    logined: false
  },
  router,
  components: { App },
  watch: {
    '$route': 'checkLogin'
  },
  created () {
    this.checkLogin();
  },
  methods: {
    checkLogin () {
      if(localStorage.userInfo){
        this.userInfo = localStorage.userInfo;
        console.log(this.userInfo);
        this.logined = true;
      }else{
        this.logined = false;
        console.log('没有登陆状态');
      }
    }
  }
})
