import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//用户登录手机号
		mobile: uni.getStorageSync("thorui_token") || "echo.",
		//是否登录 项目中改为真实登录信息判断，如token
		isLogin: uni.getStorageSync("thorui_token") ? true : false,
		//当前是否有网络连接
		networkConnected: true,
		isOnline: false,
		userAvatar:"/static/images/my/mine_avatar_3x.jpg"
	},
	mutations: {
		login(state, payload) {
			if (payload) {
				state.mobile = payload.mobile
			}
			state.isLogin = true
		},
		logout(state) {
			state.mobile = ""
			state.isLogin = false
			state.returnUrl = ""
		},
		networkChange(state, payload) {
			state.networkConnected = payload.isConnected
		},
		setOnline(state, payload) {
			state.isOnline = payload.isOnline
		},
		setAvatar(state, payload) {
			state.userAvatar = payload.avatar
		}
	},
	actions: {
		
	}
})

export default store
