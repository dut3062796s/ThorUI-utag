<template>
	<view class="container">
		<view class="tui-status__bar"></view>
		<view class="tui-header__box">
			<image src="/static/images/img_header_bg.png" class="tui-bg2__img"></image>
			<view class="tui-header-inner">
				<image src="/static/images/icon_back_gray.png" class="tui-img__back" mode="widthFix" @tap="back"></image>
				<image src="/static/images/img_logo.png" class="tui-header__logo"></image>
			</view>
			<view class="tui-header__bottom tui-flex__center">
				<view class="tui-avatar__box">
					<image src="/static/images/mine_def_touxiang_3x.png" class="tui-avatar"></image>
					<!-- <view class="tui-status"></view> -->
				</view>
				<view>{{i18n.avatar}}</view>
			</view>
		</view>
		
		<view class="tui-form">
			<view class="tui-title">
				{{i18n.name}}
			</view>
			<view class="tui-input__box tui-top__20">
				<input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.name"/>
			</view>
			<view class="tui-title tui-top__70">
				{{i18n.bio}}
			</view>
			<view class="tui-input__box tui-top__20">
				<input type="text" placeholder-class="tui-placeholder" :placeholder="i18n.bio"/>
			</view>
			<view class="tui-title tui-top__70 tui-flex__between">
				<text>{{i18n.state}}</text>
				<view class="tui-flex__center">
					<view class="tui-switch tui-flex__center">{{i18n.off}}</view>
					<view class="tui-switch tui-flex__center tui-active">{{i18n.on}}</view>
				</view>
			</view>
			<view class="tui-link__tips">
				{{i18n.tips}}
			</view>
			<view class="tui-link">
               utag.co/rashed
			</view>
			
			<view v-for="(item,index) in 3" :key="index">
				<image src="/static/images/icon_facebook.png" class="tui-link__logo"></image>
				<view class="tui-input__box">
					<input type="text" placeholder-class="tui-placeholder" placeholder="www.facebook.com"/>
					<image src="/static/images/icon_close.png" class="tui-icon__close"></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	computed: {
		i18n() {
			return this.$t('profile');
		},
		i18n_common(){
			return this.$t('common')
		}
	},
	onLoad() {
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
	padding-bottom: 200rpx;

	.tui-img__back {
		width: 40rpx;
		height: 40rpx;
		flex-shrink: 0;
	}

	.tui-header__bottom {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		flex-direction: column;
		font-size:35rpx;
		transform: translateY(45%);
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
	}
	.tui-form{
		width: 100%;
		padding: 180rpx 95rpx 0;
		box-sizing: border-box;
		.tui-title{
			font-size:30rpx;
			font-weight:bold;
			.tui-switch{
				font-size:28rpx;
				// line-height: 30rpx;
				font-weight:500;
				padding: 0 28rpx;
				border-radius:12rpx;
			}
			.tui-active{
				background-color: $uni-color-primary;
				color: $uni-text-color-inverse;
			}
		}
		.tui-input__box {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #000;
			padding-bottom: 8rpx;
		
			input {
				flex: 1;
			}
		}
		.tui-link__tips{
			padding-top: 56rpx;
		}
		.tui-link{
			padding-top: 40rpx;
			color: $uni-color-success;
		}
		.tui-link__logo{
			width: 52rpx;
			height: 52rpx;
			display: block;
			margin-top: 40rpx;
			margin-bottom: 20rpx;
			
		}
		.tui-icon__close{
			width: 25rpx;
			height: 25rpx;
			margin-left: 12rpx;
		}
		.tui-top__20{
			margin-top: 20rpx;
		}
		.tui-top__70{
			margin-top: 70rpx;
		}
	}
}
</style>
