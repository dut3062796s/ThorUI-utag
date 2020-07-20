<script>
	export default {
		onLaunch: function() {
			/* 5+环境锁定屏幕方向 */
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// #endif
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import './common/app.css';
</style>
