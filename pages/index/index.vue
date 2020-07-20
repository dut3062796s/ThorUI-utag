<template>
	<view class="container">
		<view class="tui-status__bar"></view>
		<view class="tui-header__box">
			<image src="/static/images/img_header_bg.png" class="tui-bg2__img"></image>
			<view class="tui-header-inner">
				<image src="/static/images/icon_menu_3x.png" class="tui-menu__img" mode="widthFix" @tap="sidebar"></image>
				<image src="/static/images/img_logo.png" class="tui-header__logo"></image>
				<view class="tui-lang__box" :class="{ 'tui-hidden': tabIndex === 1 }">
					<view class="tui-lang__item" :class="{ 'tui-lang__active': lang === 1 }" @tap="switchLang(1)">
						<view class="tui-scale">AR</view>
					</view>
					<view class="tui-lang__item" :class="{ 'tui-lang__active': lang === 2 }" @tap="switchLang(2)">
						<view class="tui-scale">English</view>
					</view>
				</view>
			</view>
			<view class="tui-header__bottom" @tap="login">
				<view class="tui-avatar__box">
					<image src="/static/images/mine_def_touxiang_3x.png" class="tui-avatar"></image>
					<!-- <view class="tui-status"></view> -->
				</view>
				<view class="tui-info__box">
					<view class="tui-nickname">{{ lang == 2 ? '' : name }}{{ i18n.hey }} {{ lang == 1 ? '' : 'Rashed!' }}</view>
					<view class="tui-bio" v-if="tabIndex === 0">bio here</view>
					<view class="tui-bio" v-if="tabIndex === 1">{{ i18n_store.tips }}</view>
				</view>
			</view>
		</view>
		<view class="tui-tab__1" v-show="tabIndex == 0">
			<view class="tui-page__body">
				<view class="tui-btn__box">
					<tui-button width="270rpx" height="64rpx" bold shape="circle" @click="btnDirect">{{ i18n.btn_on }}</tui-button>
					<tui-button width="270rpx" height="64rpx" bold type="black" shape="circle" @click="btnEdit">{{ i18n.btn_edit }}</tui-button>
				</view>
				<view class="tui-desc__text">{{ i18n.desc }}</view>
				<view>
					<text class="tui-desc__title">{{ i18n.title }}</text>
					<text class="tui-desc__content">{{ ' ' + i18n.content }}</text>
				</view>
			</view>
			<view class="tui-list-view">
				<tui-drag-sort ref="drag" @click="itemClick" @change="change" @sortend="sortEnd" @scroll="scroll" :listData="listData"
				 :isEdit="isEdit" :isDirect="isDirect" :scrollTop="scrollTop" :itemHeight="height">
				</tui-drag-sort>
			</view>
		</view>

		<view class="tui-tab__2" v-show="tabIndex == 1">
			<view class="tui-store-title tui-flex__between">
				<text>{{ i18n_store.collaction }}</text>
				<view class="tui-cart__box" @tap="cart">
					<image src="/static/images/icon_cart_3x.png" class="tui-img__cart" mode="widthFix"></image>
					<text class="tui-qty__box">2</text>
				</view>
			</view>
			<view class="tui-goods__list">
				<tui-goods-item v-for="(item, index) in 3" :key="index"></tui-goods-item>
			</view>
		</view>

		<view class="tui-tabbar">
			<view class="tui-tabbar__item tui-flex__center" @tap="switchTab(0)">
				<image src="/static/images/icon_tabbar_index.png" class="tui-tabbar__img" mode="widthFix"></image>
			</view>
			<view class="tui-tabbar__item tui-flex__center" @tap="switchTab(1)">
				<image src="/static/images/icon_tabbar_buy.png"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				//语言切换 1-AR 2-English
				lang: 1,
				tabIndex: 0,
				isEdit: false,
				isDirect: false,
				height: 210,
				scrollTop: 0,
				listData: [{
					id: 'tui-item__1',
					src: '/static/images/icon_facebook.png'
				}, {
					id: 'tui-item__2',
					src: '/static/images/icon_link_3x.png'
				}, {
					id: 'tui-item__3',
					src: '/static/images/icon_facebook.png'
				}, {
					id: 'tui-item__4',
					src: '/static/images/icon_link_3x.png'
				}, {
					id: 'tui-item__5',
					src: '/static/images/icon_facebook.png'
				}, {
					id: 'tui-item__6',
					src: '/static/images/icon_link_3x.png'
				}, {
					id: 'tui-item__7',
					src: '/static/images/icon_facebook.png'
				}, {
					id: 'tui-item__8',
					src: '/static/images/icon_link_3x.png'
				}, {
					id: 'tui-item__9',
					src: '/static/images/icon_facebook.png'
				}, {
					id: 'tui-item__10',
					src: '/static/images/icon_link_3x.png'
				}, {
					id: 'tui-item__11',
					name: this.$t('index').btn_add,
					fixed: true
				}],
				name: 'أغضب ، أغضب'
			};
		},
		computed: {
			i18n() {
				return this.$t('index');
			},
			i18n_store() {
				return this.$t('store');
			}
		},
		onLoad() {
			this.lang = this._i18n.locale === 'en' ? 2 : 1;
			if (!this.tui.isLogin()) {
				this.login();
			}
			this.$eventHub.$on('tabChange', res => {
				this.tabIndex = Number(res.tabIndex);
			});
		},
		methods: {
			switchTab(index) {
				this.tabIndex = index;
			},
			switchLang(index) {
				if (this.lang === index) return;
				this.lang = index;
				let langVal = index === 1 ? 'ar' : 'en';
				this._i18n.locale = langVal;
				uni.setStorageSync('utag_lang', langVal);
				// let list = this.listData;
				// list[list.length - 1].name = this.i18n.btn_add
				// this.listData = [...list]
				this.$refs.drag && this.$refs.drag.reLang(this.i18n.btn_add)
			},
			sidebar() {
				uni.navigateTo({
					url: '../sidebar/sidebar',
					animationType: 'slide-in-left'
				});
			},
			login() {
				uni.reLaunch({
					url: '../login/login'
				});
			},
			cart() {
				this.tui.href('../cart/cart');
			},
			btnDirect() {
				this.isDirect = !this.isDirect;
				this.isEdit = false;
				this.$refs.drag && this.$refs.drag.init()
			},
			btnEdit() {
				this.isDirect = false;
				this.isEdit = !this.isEdit;
				if(!this.isEdit){
					this.$refs.drag && this.$refs.drag.init()
				}
			},
			sortEnd(e) {
				console.log("sortEnd", e.listData)
				this.listData = e.listData
			},
			change(e) {
				console.log("change", e.listData)
			},
			itemClick(e) {
				console.log(e);
			},
			scroll(e) {
				this.pageMetaScrollTop = e.detail.scrollTop
			}
		},
		// 页面滚动
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	};
</script>

<style lang="scss" scoped>
	.container {
		padding-bottom: 80rpx;

		.tui-menu__img {
			width: 69rpx;
			height: 20rpx;
			flex-shrink: 0;
		}

		.tui-lang__box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24rpx;
			background-color: #ffffff;
			border-radius: 40rpx;
			padding: 2rpx 4rpx;
			margin-left: auto;

			.tui-lang__item {
				padding: 0 2rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				// transition: all 0.1s;
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
				background-color: #31bce7;
				border-radius: 40rpx;
				color: #ffffff;
			}
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

		.tui-page__body {
			width: 100%;
			padding: 0 66rpx;
			box-sizing: border-box;
			font-size: 30rpx;
		}

		.tui-btn__box {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-top: 64rpx;
		}

		.tui-desc__text {
			padding-top: 40rpx;
			padding-bottom: 18rpx;
		}

		.tui-desc__title {
			font-weight: bold;
		}

		.tui-desc__content {
			color: $uni-color-green;
		}

		.tui-list-view {
			padding: 40rpx 0 70rpx;
		}

		.tui-tabbar {
			width: 100%;
			height: 100rpx;
			position: fixed;
			z-index: 998;
			left: 0;
			bottom: 0;
			padding-bottom: constant(safe-area-inset-bottom);
			padding-bottom: env(safe-area-inset-bottom);
			box-sizing: content-box;
			display: flex;
			background-color: #ffffff;

			.tui-tabbar__item {
				width: 50%;

				image {
					width: 68rpx;
					height: 68rpx;
					flex-shrink: 0;
				}

				.tui-tabbar__img {
					width: 48rpx !important;
				}
			}
		}

		.tui-store-title {
			width: 100%;
			font-size: 44rpx;
			font-weight: bold;
			margin-top: 115rpx;
			padding: 0 54rpx 0 60rpx;
			box-sizing: border-box;

			.tui-cart__box {
				position: relative;

				.tui-img__cart {
					width: 48rpx;
					height: 46rpx;
					display: block;
				}

				.tui-qty__box {
					position: absolute;
					font-size: 33rpx;
					line-height: 33rpx;
					top: 0;
					left: 50%;
					transform: translate(-40%, -96%);
				}
			}
		}

		.tui-goods__list {
			width: 100%;
			padding: 40rpx 0 60rpx;
			box-sizing: border-box;
		}

		.tui-hidden {
			visibility: hidden;
		}

		.tui-transition {
			transition: all 0.1s;
		}
	}
</style>
