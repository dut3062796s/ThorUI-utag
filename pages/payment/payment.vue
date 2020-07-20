<template>
	<view class="container">
		<view class="tui-header">
			<view class="tui-status__bar"></view>
			<view class="tui-header__box">
				<image src="/static/images/icon_back_3x.png" class="tui-img__back" @tap="back"></image>
				<image src="/static/images/img_utag_logo.png" class="tui-utag__logo"></image>
			</view>
		</view>
		<view class="tui-title">{{i18n_common.title_items}}</view>

		<view class="tui-list-item" v-for="(item,index) in 2" :key="index">
			<view class="tui-goods__img tui-img__box">
				<image src="/static/images/icon_tabbar_buy.png" class="tui-goods__img" v-if="false"></image>
			</view>
			<view class="tui-goods__info">
				<view class="tui-goods__title">UTAG purple</view>
				<view class="tui-goods__subInfo tui-flex__between">
					<view class="tui-number">{{i18n_common.quntity}} 1</view>
					<view class="tui-price">100AED</view>
				</view>
			</view>
		</view>
		<view class="tui-price__box">
			<view class="tui-flex__between">
				<text>{{i18n_common.total}}</text>
				<text>160AED</text>
			</view>
			<view class="tui-flex__between tui-top__16">
				<text>{{i18n.shipping}}</text>
				<text>20AED</text>
			</view>
		</view>
		<view class="tui-form">
			<view class="tui-info__title">{{i18n.payment}}</view>
			<view class="tui-tips__text">{{i18n.tips}}</view>

			<view class="tui-payway tui-flex tui-top__52">
				<image src="/static/images/icon_checkmark_3x.png" mode="widthFix"></image>
				<text>{{i18n.card}}</text>
			</view>
			<view class="tui-input__box tui-width_76">
				<input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.account"  />
			</view>
			<view class="tui-flex__between tui-top__36">
				<view class="tui-input__box"  style="width:56%;">
					<input type="number" placeholder-class="tui-placeholder" :placeholder="i18n.cardNo"  maxlength="24"/>
				</view>
				<view class="tui-input__box" style="width:17%;">
					<input type="text"  placeholder-class="tui-placeholder" placeholder="10/20"  maxlength="5"/>
				</view>
				<view class="tui-input__box" style="width:17%;">
					<input type="number" placeholder-class="tui-placeholder" placeholder="000"  maxlength="3"/>
				</view>
			</view>
			<view class="tui-card__box tui-flex">
				<image src="/static/images/img_payment_visa.png" class="tui-img__visa" mode="widthFix"></image>
				<image src="/static/images/img_payment_mastercard.png" class="tui-img__mastercard" mode="heightFix"></image>
			</view>
			<view class="tui-payway tui-flex">
				<image src="/static/images/icon_uncheck_3x.png" mode="widthFix"></image>
				<text>{{i18n.cash}}</text>
			</view>
			<view class="tui-btn__box tui-flex__center">
				<tui-button width="460rpx" height="74rpx" :size="30">{{i18n.btn}}</tui-button>
				<view class="tui-back__text">{{i18n.back}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		computed: {
			i18n() {
				return this.$t('payment');
			},
			i18n_common() {
				return this.$t('common');
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			submit(e) {

			}
		}
	};
</script>

<style lang="scss" scoped>
	.container {
		.tui-status__bar {
			background-color: #ffffff;
		}

		.tui-header {
			width: 100%;
			position: fixed;
			background-color: #ffffff;
			z-index: 100;
		}

		.tui-header__box {
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			padding: 0 40rpx;
			box-sizing: border-box;
			position: relative;

			.tui-img__back {
				width: 40rpx;
				height: 40rpx;
			}

			.tui-utag__logo {
				width: 135rpx;
				height: 35rpx;
				display: block;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}

		.tui-title {
			width: 100%;
			padding: 148rpx 60rpx 32rpx;
			box-sizing: border-box;
			font-size: 48rpx;
			font-weight: bold;
			margin-top: var(--status-bar-height);
		}

		.tui-list-item {
			width: 100%;
			display: flex;
			align-items: center;
			background-color: #F4F4F4;
			padding: 20rpx 86rpx 20rpx 50rpx;
			box-sizing: border-box;
			margin-bottom: 5rpx;

			.tui-goods__img {
				width: 108rpx;
				height: 108rpx;
				border-radius: 50%;
				display: block;
			}

			.tui-img__box {
				background-color: #54dcb1;
			}

			.tui-goods__info {
				flex: 1;
				padding-left: 32rpx;

				.tui-goods__title {
					font-size: 35rpx;
					font-weight: bold;
					padding-bottom: 12rpx;
				}

				.tui-goods__subInfo {
					font-size: 24rpx;
					font-weight: bold;

					.tui-number {
						transform: scale(0.96);
						transform-origin: 0 100%;
					}

					.tui-price {
						color: $uni-color-error;
						transform: scale(0.84);
						transform-origin: 100% 100%;
					}
				}
			}
		}

		.tui-price__box {
			width: 100%;
			font-size: 36rpx;
			font-weight: bold;
			padding: 40rpx 60rpx;
			box-sizing: border-box;
			border-bottom: 2px solid #E6E6E6;
		}

		.tui-form {
			width: 100%;
			padding: 40rpx 74rpx;
			box-sizing: border-box;
		}

		.tui-info__title {
			font-size: 44rpx;
			font-weight: bold;
			padding-top: 20rpx;
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
		}
		.tui-width_76{
			width: 76%;
		}
		
		.tui-top__36 {
			margin-top: 36rpx;
		}
		
		.tui-top__16 {
			margin-top: 16rpx;
		}
		.tui-top__52{
			margin-top: 52rpx;
			margin-bottom: 26rpx;
		}

		.tui-tips__text {
			width: 80%;
			font-size: 36rpx;
			line-height: 42rpx;
			padding-top: 16rpx;
		}

		.tui-payway {
			font-weight:bold;
			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 16rpx;
			}
		}
		.tui-card__box{
			padding: 48rpx 0 68rpx;
			.tui-img__visa{
				width: 72rpx;
				height: 24rpx;
				margin-right: 28rpx;
			}
			.tui-img__mastercard{
				width: 65rpx;
				height: 40rpx;
			}
		}

		.tui-btn__box {
			width: 100%;
			flex-direction: column;
			padding: 85rpx 0;
			margin-top: 80rpx;

			.tui-back__text {
				margin-top: 30rpx;
				font-size: 30rpx;
				padding-bottom: 8rpx;
			}
		}
	}
</style>
