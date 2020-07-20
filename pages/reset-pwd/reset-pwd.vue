<template>
	<view class="container">
		<view class="tui-status__bar"></view>
		<view class="tui-header__box">
			<image src="/static/images/img_layer_bg.png" class="tui-bg__img"></image>
			<image src="/static/images/img_logo_3x.png" class="tui-logo2__3x"></image>
			<image src="/static/images/icon_back_gray.png" class="tui-icon__back" @tap="back(1)"></image>
		</view>
		<view class="tui-outer__box">
			<view class="tui-login__title">{{i18n.title}}</view>
			<view class="tui-login__text">{{i18n.reset}}</view>
			<view class="tui-login__tips tui-top__50">{{i18n.reset_tips}}</view>
			<view class="tui-input__box tui-top__70">
				<input type="password" placeholder-class="tui-placeholder" :placeholder="i18n.inupt_pwd" />
				<image src="/static/images/icon_password_3x.png" class="tui-img__password"></image>
			</view>
			<view class="tui-btn__box">
				<tui-button>{{i18n.btn_submit}}</tui-button>
			</view>
			<view class="tui-agreement__text tui-color-violet" @tap="back(2)">{{i18n.login}}</view>
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
				return this.$t('resetpwd')
			},
			i18n_common() {
				return this.$t('common')
			}
		},
		onLoad() {

		},
		methods: {
			back(layer){
				uni.navigateBack({
					delta:layer
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
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

			.tui-login__tips {
				font-size: 37rpx;
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

				.tui-img__password {
					width: 54rpx;
					height: 60rpx;
				}
			}


			.tui-btn__box {
				margin-top: 90rpx;
			}

			.tui-agreement__text {
				font-size: 26rpx;
				text-align: center;
				margin-top: 45rpx;
				font-weight: bold;
			}
		}

		.tui-top__50 {
			margin-top: 50rpx;
		}

		.tui-top__70 {
			margin-top: 70rpx;
		}
	}
</style>
