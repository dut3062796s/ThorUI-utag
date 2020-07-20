<template>
	<view class="container">
		<image src="/static/images/img_slide_bg.png" class="tui-page__bg"></image>
		<view class="tui-content__box">
			<view class="tui-status__bar"></view>
			<image src="/static/images/icon_back_gray.png" class="tui-icon__back" @tap="back"></image>
			<view class="tui-center__box">
				<image src="/static/images/icon_activate_3x.png" class="tui-check-mark"></image>
				<view class="tui-title">{{i18n.title}}</view>
				<view class="tui-content">{{i18n.complete}}</view>
			</view>
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
				return this.$t('thanks')
			}
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
		padding-bottom: 40rpx;

		.tui-page__bg {
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 1;
		}

		.tui-content__box {
			position: relative;
			z-index: 2;

			.tui-status__bar {
				background-color: transparent;
			}
			.tui-center__box{
				width: 100%;
				padding: 0 58rpx;
				box-sizing: border-box;
				color: #FFFFFF;
				position: fixed;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				.tui-check-mark{
					width: 206rpx;
					height: 206rpx;
				}
				.tui-title{
					font-size: 61rpx;
					font-weight: bold;
					padding-top: 48rpx;
				}
				.tui-content{
					font-size: 47rpx;
				}
			}
		}
	}
</style>
