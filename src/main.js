import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'

Vue.use(vueScrollBehavior, {
	router: router
})

Vue.config.productionTip = false

new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
}).$mount("#app")
