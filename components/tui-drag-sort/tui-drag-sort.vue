<template>
	<view
		class="tui-item-wrap"
		:list="list"
		:style="{ height: getHeight + 'rpx' }"
		:baseData="baseData"
		:change:list="handler.listObserver"
		:change:baseData="handler.baseDataObserver"
	>
		<view
			class="tui-drag-item tui-flex__center"
			v-for="(item, index) in list"
			:key="item.data.id"
			:data-index="index"
			:style="{ width: 100 / columns + '%', height: itemHeight + 'rpx' }"
			@longpress="handler.longPress"
			:data-basedata="baseData"
			:data-edit="isEdit"
			@touchstart="handler.touchStart"
			@touchmove="handler.touchMove"
			@touchend="handler.touchEnd"
		>
			<view class="tui-item__box tui-flex__center" v-if="!item.fixed" :class="{ 'tui-disabled': isDirect && index != 0 }">
				<image :src="item.data.src" class="tui-item__logo"></image>
				<icon type="clear" class="tui-icon__close" :size="18" v-show="isEdit"></icon>
			</view>
			<view v-else class="tui-item__box tui-flex__center">{{ item.data.name }}</view>
		</view>
	</view>
</template>
<script src="./tui-drag-sort.wxs" lang="wxs" module="handler"></script>
<script>
export default {
	props: {
		// 数据源
		listData: {
			type: Array,
			default() {
				return [];
			}
		},
		// 列数
		columns: {
			type: Number,
			default: 3
		},
		// 顶部固定高度
		topSize: {
			type: Number,
			default: 0
		},
		// 底部固定高度
		bottomSize: {
			type: Number,
			default: 0
		},
		// 每个 item 高度, 用于计算 item-wrap 高度
		itemHeight: {
			type: Number,
			default: 0
		},
		// 页面滚动高度
		scrollTop: {
			type: Number,
			default: 0 
		},
		isDirect: {
			type: Boolean,
			default: false
		},
		isEdit: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			/* 未渲染数据 */
			baseData: {},
			platform: '', // 平台信息
			listWxs: [], // wxs 传回的最新 list 数据
			rows: 4, // 行数

			/* 渲染数据 */
			list: [], // 渲染数据列
			dragging: false
		};
	},
	computed: {
		getHeight() {
			return this.rows * this.itemHeight;
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		vibrate() {
			// #ifndef H5
			if (this.platform !== 'devtools') uni.vibrateShort();
			// #endif
		},
		pageScroll(e) {
			//这里有闪动，暂不处理，后期优化
			// uni.pageScrollTo({
			// 	scrollTop: e.scrollTop,
			// 	duration: 300
			// });
		},
		drag(e) {
			this.dragging = e.dragging;
		},
		listChange(e) {
			this.listWxs = e.list;
		},
		itemClick(e) {
			let index = e.currentTarget.dataset.index;
			let item = this.listWxs[index];

			this.$emit('click', {
				key: item.realKey,
				data: item.data,
				extra: e.detail
			});
		},
		/**
		 *  初始化获取 dom 信息
		 */
		initDom() {
			let { windowWidth, windowHeight, platform } = uni.getSystemInfoSync();
			let remScale = (windowWidth || 375) / 375;

			this.platform = platform;

			let baseData = {};
			baseData.windowHeight = windowHeight;
			baseData.realTopSize = (this.topSize * remScale) / 2;
			baseData.realBottomSize = (this.bottomSize * remScale) / 2;
			baseData.columns = this.columns;
			baseData.rows = this.rows;

			const query = uni.createSelectorQuery();
			query.select('.tui-drag-item').boundingClientRect();
			query.select('.tui-item-wrap').boundingClientRect();
			query.exec(res => {
				baseData.itemWidth = res[0].width;
				baseData.itemHeight = res[0].height;
				baseData.wrapLeft = res[1].left;
				baseData.wrapTop = res[1].top + this.scrollTop;
				this.dragging = false;
				this.baseData = baseData;
			});
		},
		//切换语言
		reLang(name) {
			let item=this.list[this.list.length-1]
			if(item && item.data){
				this.$set(item.data,'name',name)
			}
		},
		/**
		 *  初始化函数
		 *  {listData, topSize, bottomSize, itemHeight} 参数改变需要手动调用初始化方法
		 */
		init() {
			// 初始必须为true以绑定wxs中的函数,
			this.dragging = true;
			let delItem = item => ({
				id: item.dragId,
				fixed: item.fixed,
				slot: item.slot,
				data: item
			});
			let listData = this.listData,
				_list = [];
			// 遍历数据源增加扩展项, 以用作排序使用
			listData.forEach((item, index) => {
				_list.push(delItem(item, false));
			});

			let i = 0,
				columns = this.columns;
			let list = (_list || []).map((item, index) => {
				item.realKey = i++; // 真实顺序
				item.sortKey = index; // 整体顺序
				item.tranX = `${(item.sortKey % columns) * 100}%`;
				item.tranY = `${Math.floor(item.sortKey / columns) * 100}%`;
				return item;
			});
			this.rows = Math.ceil(list.length / columns);
			this.list = list;
			this.listWxs = list;
			if (list.length === 0) return;

			// 异步加载数据时候, 延迟执行 initDom 方法, 防止无法正确获取 dom 信息
			setTimeout(() => this.initDom(), 100);
		},
		sort_end(e) {
			this.$emit('sortend', {
				listData: e.listData
			});
		},
		change(e) {
			this.$emit('change', {
				listData: e.listData
			});
		}
	}
};
</script>

<style scoped lang="scss">
.tui-item-wrap {
	position: relative;
	z-index: 10;
}

.tui-item-wrap .tui-drag-item {
	min-width: 33.3333%;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
}

.tui-transition {
	transition: transform 0.3s;
}

.tui-item-wrap .tui-current {
	z-index: 2;
}

.tui-item-wrap .tui-fixed {
	z-index: 0 !important;
}

.tui-item__box {
	width: 164rpx;
	height: 150rpx;
	line-height: 150rpx;
	box-shadow: 0 2rpx 7rpx 0 rgba(0, 0, 0, 0.1), 0 17rpx 20rpx 0 rgba(0, 0, 0, 0.15), 0 19rpx 30rpx 0 rgba(0, 0, 0, 0.3);
	border-radius: 18rpx;
	font-size: 32rpx;
	font-weight: bold;
	color: $uni-color-primary;
	position: relative;
}

.tui-icon__close {
	position: absolute;
	line-height: 18px;
	right: -12rpx;
	top: -12rpx;
}

.tui-item__logo {
	width: 92rpx;
	height: 92rpx;
	-webkit-user-select: none;
	pointer-events: none;
}

.tui-disabled {
	opacity: 0.4;
}
</style>
