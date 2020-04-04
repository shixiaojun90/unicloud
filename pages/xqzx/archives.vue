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
			<view class="cu-form-group margin-top">
				<view class="title">性别:</view>
				<input disabled value="男"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">地区:</view>
				<input disabled value="中国"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">语言:</view>
				<input disabled value="zn"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">手机:</view>
				<input disabled value="13699999999"></input>
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
