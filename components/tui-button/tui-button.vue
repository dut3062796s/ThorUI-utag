<template>
	<button class="tui-btn" :class="[
			'tui-btn-' + (type || 'primary'),
			disabled?'tui-gray-disabled':'',
			getShapeClass(shape),
			bold ? 'tui-text-bold' : ''
		]"
	 :hover-class="getHoverClass(disabled, type)" :style="{ width: width, height: height, lineHeight: height, fontSize: size + 'rpx', margin: margin }"
	 :loading="loading" :form-type="formType" :open-type="openType" @getuserinfo="bindgetuserinfo" @getphonenumber="bindgetphonenumber" @contact="bindcontact" @error="binderror" :disabled="disabled" @tap="handleClick">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'tuiButton',
		behaviors: ['wx://form-field-button'],
		props: {
			//样式类型 primary,black
			type: {
				type: String,
				default: 'primary'
			},
			//是否加阴影
			shadow: {
				type: Boolean,
				default: false
			},
			// 宽度 rpx或 %
			width: {
				type: String,
				default: '100%'
			},
			//高度 rpx
			height: {
				type: String,
				default: '80rpx'
			},
			//字体大小 rpx
			size: {
				type: Number,
				default: 38
			},
			bold: {
				type: Boolean,
				default: false
			},
			margin: {
				type: String,
				default: '0'
			},
			//形状 circle(圆角), square(默认方形)，rightAngle(平角)
			shape: {
				type: String,
				default: 'square'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			//禁用后背景是否为灰色 （非空心button生效）
			disabledGray: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			formType: {
				type: String,
				default: ''
			},
			openType: {
				type: String,
				default: ''
			},
			index: {
				type: [Number, String],
				default: 0
			}
		},
		methods: {
			handleClick() {
				if (this.disabled) return false;
				this.$emit('click', {
					index: Number(this.index)
				});
			},
			formSubmit(e) {
				if (this.disabled) return false;
				this.$emit('formSubmit', e);
			},
			formReset(e) {
				if (this.disabled) return false;
				this.$emit('formReset', e);
			},
			bindgetuserinfo({
				detail = {}
			} = {}) {
				this.$emit('getuserinfo', detail);
			},
			bindcontact({
				detail = {}
			} = {}) {
				this.$emit('contact', detail);
			},
			bindgetphonenumber({
				detail = {}
			} = {}) {
				this.$emit('getphonenumber', detail);
			},
			binderror({
				detail = {}
			} = {}) {
				this.$emit('error', detail);
			},
			getShapeClass: function(shape) {
				let className = '';
				if (shape == 'circle') {
					className = 'tui-fillet';
				} else if (shape == 'rightAngle') {
					className = 'tui-rightAngle';
				}
				return className;
			},
			getHoverClass: function(disabled, type) {
				let className = '';
				if (!disabled) {
					className ='tui-' + (type || 'primary') + '-hover';
				}
				return className;
			}
		}
	};
</script>

<style scoped>
	.tui-btn {
		width: 100%;
		position: relative;
		border: 0 !important;
		border-radius: 2rpx;
		padding-left: 0;
		padding-right: 0;
		overflow: visible;
		color: #FFFFFF;
	}
	.tui-btn::after{
		border: 0;
	}
	.tui-fillet{
		border-radius: 15rpx;
	}
	.tui-rightAngle {
		border-radius: 0;
	}
	.tui-gray-disabled {
		background: #f3f3f3 !important;
		color: #919191 !important;
		box-shadow: none;
	}
	.tui-btn-primary{
		background:linear-gradient(90deg,rgba(152,223,179,1),rgba(48,188,232,1));
	}
	.tui-primary-hover{
		background:linear-gradient(90deg,#68C094,#16A1C0);
		color: #f5f5f5 !important;
	}
	.tui-btn-black{
		background: #1F2122;
	}
	.tui-black-hover{
		background: #111;
		color: #f5f5f5 !important;
	}
	.tui-text-bold{
		font-weight: bold;
	}
</style>