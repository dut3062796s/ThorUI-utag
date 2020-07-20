<template>
	<view class="tui-goods__item" :class="{'tui-top__line':topLine}">
		<view class="tui-goods__img">
			<image src="/static/images/img_ready_scan.png" class="tui-img" v-if="false"></image>
		</view>
		<view class="tui-goods__info">
			<view class="tui-title">UTAG purple</view>
			<view class="tui-price">100 AED</view>
			<view class="tui-desc">A pop occurs when you tap your Utag to the back of another person's compatible phone .</view>
		</view>
		<view class="tui-op__box">
			<image src="/static/images/icon_close.png" class="tui-img__remove" v-if="type==2"></image>
			<tui-button type="black" width="100rpx" height="40rpx" bold :size="24" v-else @click="btnAdd">ADD</tui-button>
			<tui-numberbox :value="value" @change="change"></tui-numberbox>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			//1-add 2-remove
			type: {
				type: Number,
				default: 1
			},
			topLine: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			index: {
				type: Number,
				default: 0
			},
			params: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				value: 1
			};
		},
		computed: {
			i18n() {
				return this.$t('store');
			}
		},
		methods: {
			btnAdd() {
				this.$emit('add', {
					quantity: this.value,
					index: this.index,
					params: this.params
				})
			},
			remove() {
				this.$emit('remove', {
					index: this.index,
					params: this.params
				})
			},
			change(e) {
				this.value = e.value;
				this.$emit('update',{
					quantity: this.value,
					index: this.index,
					params: this.params
				})
			}
		}
	};
</script>

<style scoped>
	.tui-goods__item {
		width: 100%;
		padding: 33rpx 45rpx;
		box-sizing: border-box;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		position: relative;
	}

	.tui-top__line::before {
		content: '';
		position: absolute;
		top: 0;
		left: 112rpx;
		right: 80rpx;
		border-top: 2px solid #E6E6E6;
	}

	.tui-goods__item::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 112rpx;
		right: 80rpx;
		border-bottom: 2px solid #E6E6E6;
	}

	.tui-goods__img {
		width: 167rpx;
		height: 167rpx;
		border-radius: 50%;
		background-color: #54DCB1;
		flex-shrink: 0;
	}

	.tui-img {
		width: 167rpx;
		height: 167rpx;
		border-radius: 50%;
		display: block;
	}

	.tui-goods__info {
		padding-left: 26rpx;
	}

	.tui-title {
		width: 94%;
		font-size: 41rpx;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-price {
		font-size: 24rpx;
		color: #E32424;
		font-weight: bold;
	}

	.tui-desc {
		font-size: 24rpx;
		font-weight: 500;
		transform: scale(0.88);
		transform-origin: 0 center;
	}

	.tui-op__box {
		height: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		padding-top: 7rpx;
	}

	.tui-img__remove {
		width: 30rpx;
		height: 30rpx;
	}
</style>
