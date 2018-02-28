// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import moment from 'moment'
// import ElementUI from 'element-ui'
// 1.0
// import 'element-ui/lib/theme-default/index.css'
// 2.0
// import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

// Vue.use(ElementUI)
Vue.prototype.$ajax = axios;

// vue + elementui + vue-router + axios

window.fn = function(){
  console.log('OK');
};

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")   ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt){
  //author: meizz
  var o = {
    "M+" : this.getMonth()+1,         //月份
    "d+" : this.getDate(),          //日
    "h+" : this.getHours(),          //小时
    "m+" : this.getMinutes(),         //分
    "s+" : this.getSeconds(),         //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S" : this.getMilliseconds()       //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));

  return fmt;
}

// 时间戳格式化
Number.prototype.format = function(){
  var time = new Date(this);

  return time;
}

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment(value).format(formatString);
});

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
