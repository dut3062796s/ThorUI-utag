<template>
	<view class="container">
		<view class="tui-status__bar"></view>
		<view class="tui-header__box">
			<image src="/static/images/img_layer_bg.png" class="tui-bg__img"></image>
			<image src="/static/images/img_logo_3x.png" class="tui-logo__3x"></image>
			<view class="tui-lang__box" :style="{marginTop:menuButtonTop+'px'}">
				<view class="tui-lang__item" :class="{'tui-lang__active':lang===1}" @tap="switchLang(1)">
					<view class="tui-scale">AR</view>
				</view>
				<view class="tui-lang__item" :class="{'tui-lang__active':lang===2}" @tap="switchLang(2)">
					<view class="tui-scale">English</view>
				</view>
			</view>
		</view>
		<view class="tui-outer__box">
			<view class="tui-login__title">{{i18n.title}}</view>
			<view class="tui-login__text">{{i18n.login}}</view>
			<view class="tui-input__box tui-top__99">
				<input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.input_account" />
				<image src="/static/images/icon_account_3x.png" class="tui-img__account"></image>
			</view>
			<view class="tui-input__box tui-top__70">
				<input type="password" placeholder-class="tui-placeholder" :placeholder="i18n_common.input_password" />
				<image src="/static/images/icon_password_3x.png" class="tui-img__password"></image>
			</view>
			<view class="tui-forgot__box" @tap="forgot">{{i18n.forgot}}</view>
			<view class="tui-btn__box">
				<tui-button @click="login">{{i18n.btn}}</tui-button>
			</view>
			<view class="tui-reg__box">
				<text>{{i18n.reg_tips}}</text>
				<text class="tui-color-violet" @tap="reg">{{i18n.sign_up}}</text>
			</view>
			<view class="tui-error__text">{{i18n.error_msg}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//语言切换 1-AR 2-English
				lang: 1,
				menuButtonTop: 0
			}
		},
		computed: {
			i18n() {
				return this.$t('login')
			},
			i18n_common() {
				return this.$t('common')
			}
		},
		onLoad() {
			this.lang = this._i18n.locale === 'en' ? 2 : 1

			// #ifdef MP
			let menu = wx.getMenuButtonBoundingClientRect();
			this.menuButtonTop = menu.height
			// #endif
		},
		methods: {
			switchLang(index) {
				this.lang = index;
				let langVal = index === 1 ? 'ar' : 'en';
				this._i18n.locale = langVal;
				uni.setStorageSync('utag_lang', langVal)
			},
			forgot() {
				this.tui.href('../reset-verify/reset-verify')
			},
			reg() {
				this.tui.href('../reg/reg')
			},
			login() {
				uni.setStorageSync('thorui_token', 'token_13141516')
				uni.reLaunch({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.tui-lang__box {
			position: absolute;
			right: 35rpx;
			top: 35rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24rpx;
			background-color: #FFFFFF;
			border-radius: 40rpx;
			padding: 2rpx 4rpx;

			.tui-lang__item {
				padding: 0 2rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.1s;
				font-weight: 600;

				&:first-child {
					padding: 0 6rpx;
				}

				.tui-scale {
					transform: scale(0.72);
					transform-origin: center center;
				}
			}

			.tui-lang__active {
				background-color: #31BCE7;
				border-radius: 40rpx;
				color: #FFFFFF;
			}
		}

		.tui-outer__box {
			width: 100%;
			padding: 144rpx 90rpx 200rpx;
			box-sizing: border-box;

			.tui-login__title {
				font-size: 58rpx;
			}

			.tui-login__text {
				font-size: 70rpx;
				font-weight: bold;
				color: $uni-text-color-violet;
				text-shadow: 1px 0 0 $uni-text-color-violet;
				padding-top: 4rpx;
			}

			.tui-input__box {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #000;
				padding-bottom: 15rpx;

				input {
					flex: 1;
				}

				.tui-img__account {
					width: 48rpx;
					height: 60rpx;
				}

				.tui-img__password {
					width: 54rpx;
					height: 60rpx;
				}
			}

			.tui-forgot__box {
				color: $uni-color-warning;
				font-size: 26rpx;
				margin-top: 20rpx;
				padding: 3rpx 0;
				text-align: right;
				transform: scale(0.96);
				transform-origin: 100% center;
			}

			.tui-btn__box {
				margin-top: 36rpx;
			}

			.tui-reg__box {
				margin-top: 56rpx;
				text-align: center;
				font-size: 26rpx;

				.tui-color-violet {
					padding-left: 8rpx;
					font-weight: 600;
				}
			}

			.tui-error__text {
				color: $uni-color-warning;
				font-size: 32rpx;
				text-align: center;
				padding-top: 120rpx;
			}
		}

		.tui-top__99 {
			margin-top: 99rpx;
		}

		.tui-top__70 {
			margin-top: 70rpx;
		}
	}
</style>
