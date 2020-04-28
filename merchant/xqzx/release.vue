<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">发布需求</block>
		</cu-custom>
		
		<view class="cu-form-group"  @tap="toChild" :data-url="'/pages/xqzx/submit?type='+JSON.stringify('园区地址')">
			<view class="title">地址园区</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="cu-form-group"  @tap="toChild" :data-url="'/pages/xqzx/submit?type='+JSON.stringify('执照转让')">
			<view class="title">执照转让</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="cu-form-group"  @tap="toChild" :data-url="'/pages/xqzx/submit?type='+JSON.stringify('资质许可')">
			<view class="title">资质许可</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="cu-form-group"  @tap="toChild" :data-url="'/pages/xqzx/submit?type='+JSON.stringify('社保挂靠')">
			<view class="title">社保挂靠</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="cu-form-group"  @tap="toChild" :data-url="'/pages/xqzx/submit?type='+JSON.stringify('工商财税')">
			<view class="title">工商财税</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="cu-form-group"  @tap="toChild" :data-url="'/pages/xqzx/submit?type='+JSON.stringify('其他需求')">
			<view class="title">其他需求</view>
			<text class="cuIcon-right"></text>
		</view>
		
		<!-- 底部结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ColorList: this.ColorList,
			};
		},
		
		methods: {
			toChild(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
		}
	}
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}
	
	.search{
		margin-top: 0;
		width: 100%;
	}
	
	.tabbar {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	
</style>
