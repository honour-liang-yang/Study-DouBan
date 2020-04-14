import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import StatusView from '../views/StatusView.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
			name: 'LoginView',
			component: LoginView
		},
		{
			path: '/register',
			name: 'RegisterView',
			component: RegisterView
		},
		{
			path: '/status',
			name: 'StatusView',
			component: StatusView
		}
	]
})
