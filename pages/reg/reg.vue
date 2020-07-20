<template>
	<view class="container">
		<view class="tui-status__bar"></view>
		<view class="tui-header__box">
			<image src="/static/images/img_layer_bg.png" class="tui-bg__img"></image>
			<image src="/static/images/img_logo_3x.png" class="tui-logo2__3x"></image>
			<image src="/static/images/icon_back_gray.png" class="tui-icon__back" @tap="back"></image>
		</view>
		<view class="tui-outer__box">
			<view class="tui-login__title">{{i18n.title}}</view>
			<view class="tui-login__text">{{i18n.signup}}</view>
			<view class="tui-input__box tui-top__55">
				<input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.input_username" />
				<image src="/static/images/icon_account_3x.png" class="tui-img__account"></image>
			</view>
			<view class="tui-input__box tui-top__70">
				<input type="text" placeholder-class="tui-placeholder" :placeholder="i18n_common.input_email" />
				<image src="/static/images/icon_email_3x.png" class="tui-img__email"></image>
			</view>
			<view class="tui-input__box tui-top__70">
				<input type="password" placeholder-class="tui-placeholder" :placeholder="i18n_common.input_password" />
				<image src="/static/images/icon_password_3x.png" class="tui-img__password"></image>
			</view>
			<view class="tui-input__box tui-top__70">
				<input type="password" placeholder-class="tui-placeholder" :placeholder="i18n.input_passcode" />
			</view>
			<view class="tui-btn__box">
				<tui-button>{{i18n.btn}}</tui-button>
			</view>
			<view class="tui-agreement__text">{{i18n.agreement}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			i18n() {
				return this.$t('signup')
			},
			i18n_common() {
				return this.$t('common')
			}
		},
		onLoad() {

		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.tui-outer__box {
			width: 100%;
			padding: 52rpx 90rpx 200rpx;
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

				.tui-img__email {
					width: 59rpx;
					height: 40rpx;
				}
			}


			.tui-btn__box {
				margin-top: 90rpx;
			}

			.tui-agreement__text {
				font-size: 25rpx;
				text-align: center;
				padding-top: 45rpx;
			}
		}

		.tui-top__55 {
			margin-top: 55rpx;
		}

		.tui-top__70 {
			margin-top: 70rpx;
		}
	}
</style>
