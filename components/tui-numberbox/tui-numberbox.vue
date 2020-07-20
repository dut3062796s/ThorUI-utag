<template>
	<view class="tui-numberbox">
		<image src="/static/images/img_cart_reduce.png" class="tui-img__reduce" :class="[disabled || min>=value?'tui-disabled':'']" @tap="reduce"></image>
		<input type="number" v-model="inputValue" :disabled="disabled" @blur="blur" class="tui-num-input" :style="{color:color,fontSize:size+'rpx',backgroundColor:backgroundColor,height:height+'rpx',minHeight:height+'rpx',width:width+'rpx'}" />
		<image src="/static/images/img_cart_add.png" class="tui-img__add" :class="[disabled || value>=max?'tui-disabled':'']" @tap="plus"></image>
	</view>
</template>

<script>
	export default {
		name: "tuiNumberbox",
		props: {
			value: {
				type: Number,
				default: 1
			},
			//最小值
			min: {
				type: Number,
				default: 1
			},
			//最大值
			max: {
				type: Number,
				default: 99
			},
			//迈步大小 1 1.1 10...
			step: {
				type: Number,
				default: 1
			},
			//是否禁用操作
			disabled: {
				type: Boolean,
				default: false
			},
			//input 高度
			height: {
				type: Number,
				default: 40
			},
			//input 宽度
			width: {
				type: Number,
				default: 44
			},
			size: {
				type: Number,
				default: 38
			},
			//input 背景颜色
			backgroundColor: {
				type: String,
				default: "#fff"
			},
			//input 字体颜色
			color: {
				type: String,
				default: "#000"
			},
			//索引值，列表中使用
			index: {
				type: [Number, String],
				default: 0
			},
			//自定义参数
			custom: {
				type: [Number, String],
				default: 0
			}
		},
		created() {
			this.inputValue = +this.value
		},
		data() {
			return {
				inputValue: 0
			};
		},
		watch: {
			value(val) {
				this.inputValue = +val
			}
		},
		methods: {
			getScale() {
				let scale = 1;
				//浮点型
				if (!Number.isInteger(this.step)) {
					scale = Math.pow(10, (this.step + '').split('.')[1].length)
				}
				return scale;
			},
			calcNum: function(type) {
				if (this.disabled) {
					return
				}
				const scale = this.getScale()
				let num = this.value * scale
				let step = this.step * scale
				if (type === 'reduce') {
					num -= step
				} else if (type === 'plus') {
					num += step
				}
				let value = num / scale
				if (type === "plus" && value < this.min) {
					value = this.min
				} else if (type === "reduce" && value > this.max) {
					value = this.max
				}
				if (value < this.min || value > this.max) {
					return
				}
				this.handleChange(value, type)
			},
			plus: function() {
				this.calcNum("plus")
			},
			reduce: function() {
				this.calcNum("reduce")
			},
			blur: function(e) {
				let value = e.detail.value
				if (value) {
					if (~value.indexOf(".") && Number.isInteger(this.step)) {
						value = value.split(".")[0]
					}
					value = Number(value)
					if (value > this.max) {
						value = this.max
					} else if (value < this.min) {
						value = this.min
					}
				} else {
					value = this.min
				}
				if ((value == this.value && value != this.inputValue) || !e.detail.value) {
					this.inputValue = value
				}
				this.handleChange(value, "blur")
			},
			handleChange(value, type) {
				if (this.disabled) return;
				this.$emit('change', {
					value: value,
					type: type,
					index: this.index,
					custom: this.custom
				})
			}
		}
	}
</script>

<style scoped>
	.tui-numberbox {
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
	}

	.tui-num-input {
		text-align: center;
		margin: 0 6rpx;
		font-weight: bold;
	}

	.tui-disabled {
		opacity: 0.5;
	}
	.tui-img__reduce,.tui-img__add{
		width: 21rpx;
		height: 21rpx;
		padding: 8rpx 4rpx;
	}
</style>
