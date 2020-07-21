<template>
	<view class="container">
		<view class="tui-status__bar"></view>
		<view class="tui-header">
			<image src="/static/images/icon_close_3x.png" @tap="back"></image>
		</view>
		<image src="/static/images/img_activated_3x.png" class="tui-img__activate" mode="widthFix"></image>
	    <view class="tui-tips__text">{{i18n.tips}}</view>
		<view class="tui-btn__box tui-flex__center">
			<tui-button width="422rpx" height="68rpx" :size="27" @click="btnNfc">{{i18n.btn}}</tui-button>
		</view>
		<view class="tui-btn__box tui-flex__center">
			<tui-button width="422rpx" height="68rpx" :size="27" @click="btnScan">{{i18n.btn_scan}}</tui-button>
		</view>
		
		<tui-bottom-popup :show="show" @close="cancel">
			<view class="tui-popup-title">{{i18n.title}}</view>
			<view class="tui-img_scan tui-flex__center">
				<image src="/static/images/img_ready_scan.png"></image>
			</view>
			<view class="tui-activate_tips">{{i18n.activate_tips}}</view>
			<view class="tui-popup__btn tui-flex__center">
				<tui-button type="black" width="422rpx" height="68rpx" :size="34" @click="cancel">{{i18n.btn_cancel}}</tui-button>
			</view>
		</tui-bottom-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			}
		},
		onLoad() {
			
		},
		computed: {
			i18n() {
				return this.$t('activated')
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			btnNfc(){
				this.show=true
			},
			cancel(){
				this.show=false
			},
			btnScan(){
				this.tui.href('../barcode/barcode')
				// uni.scanCode({
				//     success: function (res) {
				//         console.log('条码类型：' + res.scanType);
				//         console.log('条码内容：' + res.result);
				//     }
				// });
			}
		}
	}
</script>

<style lang="scss" scoped> 
    .container{
		padding-bottom: 100rpx;
		.tui-status__bar{
			background-color: #FFFFFF;
		}
		.tui-header{
			width: 100%;
			padding: 56rpx 63rpx;
			box-sizing: border-box;
			display: flex;
			/* #ifndef MP */
			justify-content: flex-end;
			/* #endif */
			image{
				width: 38rpx;
				height: 38rpx;
			}
		}
		.tui-img__activate{
			width: 360rpx;
			display: block;
			margin: 0 auto 40rpx;
		}
		.tui-tips__text{
			width: 100%;
			padding:20rpx 69rpx;
			box-sizing: border-box;
			text-align: center;
			font-size:33rpx;
		}
		.tui-btn__box{
			padding: 20rpx 0;
		}
		.tui-popup-title{
			font-size: 50rpx;
			text-align: center;
			padding-top: 48rpx;
		}
		.tui-img_scan{
			width: 100%;
			padding: 32rpx 0 44rpx;
			image{
				width: 200rpx;
				height: 200rpx;
			}
		}
		.tui-activate_tips{
			width: 100%;
			padding: 0 72rpx;
			box-sizing: border-box;
			text-align: center;
		}
		.tui-popup__btn{
			width: 100%;
			padding: 60rpx 0 80rpx;
		}
	}
</style>
