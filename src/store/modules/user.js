import request from 'superagent'

const state = {
	login_email: '',
	login_name: '',
	login_token: '',
	temp_email: '',
	temp_token: '',
	temp_name: ''
}

const getters = {
	//filtering currentUser
	currentUser: state => {
		return {
			email: state.login_email,
			name: state.login_name,
			token: state.login_token
		}
	}
}

const mutations = {
	updateData(state, payload) {
		switch (payload.name) {
			case 'email':
				state.temp_email = payload.value
				break;
			case 'token':
				state.temp_token = payload.value
				break
			case 'name':
				state.temp_name = payload.name
				break
			default:
				console.log('Error:Dont directly mutate Vuex store');
				break;
		}
	},
	getLocalUser(state) {
		state.login_email = localStorage.getItem("email")
		state.login_token = localStorage.getItem("token")
		state.login_name = localStorage.getItem('name')
	},
	setUser(state, payload) {
		state.login_email = payload.login_email
		state.login_name = payload.login_name
		state.login_token = payload.login_token
	},
	loginOut(state) {
		localStorage.removeItem('name')
		localStorage.removeItem('token')
		localStorage.removeItem('email')
		state.login_email = ''
		state.login_name = ''
		state.login_token = ''
	}
}

const actions = {
	/**
	 * Login
	 * new Promise((resolve, reject) => {})
	 * Authorization: 'Bearer ' + token
	 * email: payload.email
	 * pass: payload.pass
	 * name: payload.name
	 */
	login({
		commit
	}, payload) {
		return new Promise(((resove, reject) => {
			request
				.get('https://douban.herokuapp.com/user/' + payload.email)
				.set('Authorization', 'Bearer ' + payload.token)
				.then(res => {
					commit({
						type: 'setUser',
						email: res.body.email,
						name: res.body.name,
						token: res.body.token
					})
					resove(res)
				}, err => {
					reject(err)
				})
		}))
	},
	/**
	 * Register
	 * new Promise((resolve, reject) => {})
	 * email: payload.email
	 * pass: payload.pass
	 * name: payload.name
	 */
	register({
		commit
	}, payload) {
		return new Promise((resove, reject) => {
			request
				.post('https://douban.herokuapp.com/user/')
				.send({
					email: payload.email,
					pass: payload.pass,
					name: payload.name
				})
				.then(res => {
					localStorage.setItem('email', res.body.email)
					localStorage.setItem('name', res.body.name)
					localStorage.setItem('token', res.body.token)
					commit({
						type: 'setUser',
						email: res.body.email,
						name: res.body.name,
						token: res.body.token
					})
					resove(res)
				}, err => {
					reject(err)
				})
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
