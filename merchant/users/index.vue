<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">个人资料</block>
		</cu-custom>
		
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view class="text-grey">凯尔</view>
				</view>
			</view>
		</view>
		
		<form>
			<view class="cu-form-group margin-top" @tap="toChild" :data-url="'/pages/users/zzzr'">
				<view class="title">执照转让</view>
			</view>
			<view class="cu-form-group margin-top" @tap="toChild" :data-url="'/pages/users/glxq'">
				<view class="title">管理需求</view>
			</view>
			<view class="cu-form-group margin-top" @tap="toChild" :data-url="'/pages/users/ddyx'">
				<view class="title">订单意向</view>
			</view>
			<view class="cu-form-group margin-top" @tap="toChild" :data-url="'/pages/users/scfw'">
				<view class="title">收藏服务</view>
			</view>
			<view class="cu-form-group margin-top" @tap="toChild" :data-url="'/pages/users/gzxq'">
				<view class="title">关注需求</view>
			</view>
			<view class="cu-form-group margin-top" @tap="toChild" :data-url="'/pages/users/rztqq'">
				<view class="title">入驻淘企企</view>
				<input disabled value="成为服务商"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">帮助</view>
			</view>
		</form>
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
