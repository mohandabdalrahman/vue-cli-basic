import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// global filter

Vue.filter('snippet',val=>{
  if(!val || typeof(val) != 'string') return '';
  return val.slice(0,50);
  
})


Vue.filter('changeColor',val=>{
  return val.style.color='red'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
