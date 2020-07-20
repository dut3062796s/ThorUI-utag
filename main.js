import Vue from 'vue'
import App from './App'
import VueI18n from './lib/vue-i18n.min' 
import store from './store'
import tui from './common/httpRequest'

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({  
  locale: uni.getStorageSync('utag_lang') || 'en',  
  messages: {  
    'en': require('./static/lang/lang.en'),  
    'ar': require('./static/lang/lang.ar') 
  }  
})  

Vue.prototype._i18n = i18n  
Vue.prototype.tui = tui
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	 i18n,
	 store,
    ...App
})
app.$mount()