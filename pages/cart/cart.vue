<template>
	<view class="container">
		<view class="tui-status__bar"></view>
		<view class="tui-header__box">
			<image src="/static/images/img_header_bg.png" class="tui-bg2__img"></image>
			<view class="tui-header-inner">
				<image src="/static/images/icon_back_gray.png" class="tui-img__back" mode="widthFix" @tap="back"></image>
				<image src="/static/images/img_logo.png" class="tui-header__logo"></image>
			</view>
			<view class="tui-header__bottom">
				<view class="tui-avatar__box">
					<image src="/static/images/mine_def_touxiang_3x.png" class="tui-avatar"></image>
					<!-- <view class="tui-status"></view> -->
				</view>
				<view class="tui-info__box">
					<view class="tui-nickname">{{ lang == 2 ? '' : name }}{{ i18n_index.hey }} {{ lang == 1 ? '' : 'Rashed!' }}</view>
					<view class="tui-bio" >{{ i18n.tips }}</view>
				</view>
			</view>
		</view>
		<view class="tui-store-title">
			<text>{{ i18n.title }}</text>
		</view>
		<view class="tui-goods__list">
			<tui-goods-item :topLine="index==0" :type="2" v-for="(item, index) in 2" :key="index"></tui-goods-item>
		</view>
		
		<view class="tui-tabbar">
			<view class="tui-info__box">
				<view class="tui-total__box tui-flex__between">
					<view>{{i18n_common.total}}</view>
					<view>160 AED</view>
				</view>
				<view class="tui-number__box tui-flex__between">
					<view>UTAG putple x2:</view>
					<view>2*80 AED</view>
				</view>
			</view>
			<tui-button shape="rightAngle" height="100rpx" :size="44" @click="confirm">{{i18n.btn_checkout}}</tui-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//语言切换 1-AR 2-English
			lang: 1,
			name: 'أغضب ، أغضب'
		};
	},
	computed: {
		i18n() {
			return this.$t('cart');
		},
		i18n_index() {
			return this.$t('index');
		},
		i18n_common(){
			return this.$t('common')
		}
	},
	onLoad() {
		this.lang = this._i18n.locale === 'en' ? 2 : 1;
	},
	methods: {
		login() {
			uni.reLaunch({
				url: '../login/login'
			});
		},
		back(){
			uni.navigateBack()
		},
		confirm(){
			this.tui.href('../shipping/shipping')
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	padding-bottom: 320rpx;

	.tui-img__back {
		width: 40rpx;
		height: 40rpx;
		flex-shrink: 0;
	}

	.tui-header__bottom {
		width: 100%;
		display: flex;
		align-items: center;
		position: absolute;
		left: 0;
		bottom: 0;
		padding: 26rpx 42rpx;
		box-sizing: border-box;

		.tui-avatar__box {
			position: relative;

			.tui-avatar {
				// width: 70px;
				// height:70px;
				width: 140rpx;
				height: 140rpx;
				border-radius: 50%;
				border: 2px solid $uni-text-color-violet;
				background-color: #fff;
			}

			.tui-status {
				width: 12px;
				height: 12px;
				background-color: $uni-color-success;
				border-radius: 50%;
				position: absolute;
				right: 5px;
				bottom: 8px;
				border: 2px solid $uni-text-color-violet;
				border-right-color: transparent;
				border-bottom-color: transparent;
			}
		}

		.tui-info__box {
			width: 76%;
			color: #ffffff;
			padding-left: 28rpx;
			padding-bottom: 4rpx;

			.tui-nickname {
				width: 100%;
				font-size: 51rpx;
				line-height: 52rpx;
				font-weight: bold;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.tui-bio {
				font-size: 30rpx;
				line-height: 30rpx;
				padding-top: 12rpx;
			}
		}
	}

	.tui-store-title {
		width: 100%;
		font-size: 51rpx;
		font-weight: bold;
		margin-top: 88rpx;
		padding: 0 57rpx 16rpx;
		box-sizing: border-box;
	}

	.tui-goods__list {
		width: 100%;
		padding: 40rpx 0 60rpx;
		box-sizing: border-box;
	}
	
	.tui-tabbar{
		width: 100%;
		position: fixed;
		border-top: 2px solid #E6E6E6;
		left: 0;
		bottom: 0;
		z-index: 99;
		background-color: #FFFFFF;
		.tui-info__box{
			width: 100%;
			padding: 36rpx 34rpx;
			box-sizing: border-box;
			.tui-total__box{
				font-size:43rpx;
				line-height: 44rpx;
				font-weight:bold;
			}
			.tui-number__box{
				font-size:29rpx;
				line-height: 30rpx;
				font-weight:500;
				padding-top: 20rpx;
			}
		}
		
	}
}
</style>
