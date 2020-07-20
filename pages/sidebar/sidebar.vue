<template>
	<view class="container">
		<image src="/static/images/img_slide_bg.png" class="tui-page__bg"></image>
		<view class="tui-content__box">
			<view class="tui-header__box tui-flex">
				<image src="/static/images/mine_def_touxiang_3x.png" class="tui-avatar"></image>
				<view style="width: 100%;">
					<view class="tui-nick tui-text__ellipsis">Rashed Almansoori</view>
					<view class="tui-bio tui-text__ellipsis">Tap here to edit</view>
				</view>
			</view>

			<view class="tui-menu-list">
				<view class="tui-menu-item tui-flex" @tap="back">
					<image src="/static/images/icon_home_3x.png" mode="widthFix"></image>
					<text>{{ i18n.home }}</text>
				</view>
				<view class="tui-menu-item tui-flex" @tap="href(1)">
					<image src="/static/images/icon_info_3x.png" mode="widthFix"></image>
					<text>{{ i18n.profile }}</text>
				</view>
				<view class="tui-menu-item tui-flex" @tap="href(2)">
					<image src="/static/images/icon_activate.png" mode="widthFix"></image>
					<text>{{ i18n.activate }}</text>
				</view>
				<view class="tui-menu-item tui-flex" @tap="store">
					<image src="/static/images/icon_buy_3x.png" mode="widthFix"></image>
					<text>{{ i18n.buy }}</text>
				</view>
				<view class="tui-menu-item tui-flex">
					<image src="/static/images/icon_read_3x.png" mode="widthFix"></image>
					<text>{{ i18n.read }}</text>
				</view>
				<view class="tui-divider"></view>
				<view class="tui-menu-item tui-flex" @tap="href(3)">
					<image src="/static/images/icon_tutorial_3x.png" mode="widthFix"></image>
					<text>{{ i18n.tutorial }}</text>
				</view>
				<view class="tui-menu-item tui-flex" @tap="href(3)">
					<image src="/static/images/icon_help_3x.png" mode="widthFix"></image>
					<text>{{ i18n.help }}</text>
				</view>
				<view class="tui-menu-item tui-flex">
					<image src="/static/images/icon_logout_3x.png" mode="widthFix"></image>
					<text>{{ i18n.logout }}</text>
				</view>
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
			return this.$t('sidebar');
		}
	},
	methods: {
		back() {
			uni.navigateBack();
		},
		href(type) {
			let url = '../my/my';
			if (type == 2) {
				url = '../activate/activate';
			} else if (type == 3) {
				url = '../webview/webview';
			}
			this.tui.href(url);
		},
		store() {
			this.$eventHub.$emit('tabChange', {
				tabIndex: 1
			});
			setTimeout(()=>{
				this.back()
			},80)
		}
	}
};
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

		.tui-header__box {
			width: 100%;
			padding: 84rpx 60rpx;
			box-sizing: border-box;
			color: #ffffff;
			font-weight: 400;

			.tui-avatar {
				width: 95rpx;
				height: 95rpx;
				border-radius: 50%;
				margin-right: 20rpx;
				flex-shrink: 0;
			}

			.tui-text__ellipsis {
				width: 92%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.tui-nick {
				font-size: 33rpx;
			}

			.tui-bio {
				font-size: 26rpx;
			}
		}

		.tui-menu-list {
			width: 100%;
			padding: 20rpx 30rpx 0 112rpx;
			box-sizing: border-box;
			color: #ffffff;
			font-size: 29rpx;
			font-weight: 400;

			.tui-menu-item {
				padding: 26rpx 0;

				image {
					width: 45rpx;
					height: 45rpx;
					margin-right: 26rpx;
				}
			}

			.tui-divider {
				width: 314rpx;
				height: 1px;
				background-color: rgba($color: #fff, $alpha: 0.4);
				margin: 80rpx 0;
			}
		}
	}
}
</style>
