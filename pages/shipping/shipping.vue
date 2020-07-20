<template>
	<view class="container">
		<view class="tui-header">
			<view class="tui-status__bar"></view>
			<view class="tui-header__box">
				<image src="/static/images/icon_back_3x.png" class="tui-img__back" @tap="back"></image>
				<image src="/static/images/img_utag_logo.png" class="tui-utag__logo"></image>
			</view>
		</view>
		<view class="tui-title">{{ i18n_common.title_items }}</view>

		<view class="tui-list-item" v-for="(item, index) in 2" :key="index">
			<view class="tui-goods__img tui-img__box"><image src="/static/images/icon_tabbar_buy.png" class="tui-goods__img" v-if="false"></image></view>
			<view class="tui-goods__info">
				<view class="tui-goods__title">UTAG purple</view>
				<view class="tui-goods__subInfo tui-flex__between">
					<view class="tui-number">{{ i18n_common.quntity }} 1</view>
					<view class="tui-price">100AED</view>
				</view>
			</view>
		</view>
		<view class="tui-price__box tui-flex__between">
			<text>{{ i18n_common.total }}</text>
			<text>160AED</text>
		</view>
		<form class="tui-form" @submit="submit">
			<view class="tui-info__title">{{ i18n.two }}</view>
			<view class="tui-input__box tui-top__40"><input type="text" placeholder-class="tui-placeholder" :placeholder="i18n_common.input_email" name="email" /></view>
			<view class="tui-input__box tui-top__40"><input type="number" placeholder-class="tui-placeholder" :placeholder="i18n.input_phone" name="phone" /></view>
			<view class="tui-info__title tui-top__40">{{ i18n.three }}</view>
			<view class="tui-input__box tui-top__40"><input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.fullname" name="fullname" /></view>
			<view class="tui-input__box tui-top__40"><input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.address" /></view>
			<view class="tui-input__box tui-top__40"><input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.detail" /></view>
			<view class="tui-input__box tui-top__40"><input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.city" /></view>
			<view class="tui-input__box tui-top__40">
				<input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.country" disabled/>
				<image src="/static/images/icon_arrow_3x.png" class="tui-img__arrow" mode="widthFix"></image>
			</view>
			<view class="tui-input__box tui-top__40">
				<input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.emarites" disabled/>
				<image src="/static/images/icon_arrow_3x.png" class="tui-img__arrow" mode="widthFix"></image>
			</view>
			<view class="tui-input__box tui-top__40"><input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.code" /></view>
			<view class="tui-btn__box tui-flex__center">
				<tui-button width="460rpx" height="74rpx" :size="30" formType="submit">{{ i18n.btn }}</tui-button>
				<view class="tui-back__text">{{ i18n_common.tocart }}</view>
			</view>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		i18n() {
			return this.$t('confirm_order');
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
			console.log(e);
			this.tui.href('../confirm-order/confirm-order');
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
		background-color: #f4f4f4;
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
		border-bottom: 2px solid #e6e6e6;
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
		.tui-img__arrow{
			width: 32rpx;
			height: 20rpx;
			flex-shrink: 0;
			margin-left: 12rpx;
		}
	}

	.tui-top__40 {
		margin-top: 40rpx;
	}

	.tui-btn__box {
		width: 100%;
		flex-direction: column;
		padding: 85rpx 0;

		.tui-back__text {
			margin-top: 30rpx;
			font-size: 30rpx;
			padding-bottom: 8rpx;
		}
	}
}
</style>
