<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">商户中心</block>
		</cu-custom>
		
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view class="text-grey">服务商名称</view>
				</view>
				
			</view>
		</view>
		<!-- 消息列表开始 -->
		<view class="cu-card article margin-top"> <!-- no-card -->
			<view class="cu-item" @tap="toChild" :data-url="'/merchant/czy/list'">
				<view class="cu-form-group">
					<view class="title">100位操作员</view>
					<text class="cuIcon-right"></text>
				</view>
				<view class="content">
					<view class="desc">
						<view class="text-content">操作员可以代表商户在平台进行操作</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item"  style="height: 260rpx;">
				<view class="cu-form-group">
					<view class="title">添加操作员</view>
					<text class="cuIcon-right"></text>
				</view>
				<view class="content">
					<view class="desc">
						<view class="text-content">分享授权页面给操作员</view>
					</view>
				</view>
				<view class="content bg-gray"  style="height: 108rpx;">
					<view class="desc">
						<view class="text-content" style="padding-top:10rpx">操作员可使用管理服务、增加服务和回复评论功能，并代表商户向雇主端发送意向</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item" @tap="toChild" :data-url="'/pages/users/rztqq'"  style="height: 108rpx;">
				<view class="cu-form-group">
					<view class="title">修改商户信息</view>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			
			<view class="cu-item" @tap="toChild" :data-url="'/pages/index/index'" style="height: 108rpx;">
				<view class="cu-form-group">
					<view class="title">登录雇主端</view>
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</view>
		
		<!-- 消息列表结束 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				dotStyle: true,
				gridCol: 3,
				loadModal: false,
				//loadProgress: 0
			};
		},
		methods: {
			LoadModal(e) {
				this.loadModal = true;
				setTimeout(() => {
					this.loadModal = false;
				}, 2000)
			},
			
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
	
	.cu-card{
		height: 170rpx;
	}
	.cu-card.article {
		background-color: #ffffff;
		overflow: hidden;
		border-radius: 10rpx;
		border-bottom: 0.5px solid #ddd;
		display: block;
		height: 643rpx;
		margin-top: 20rpx;
	}
	
	.cu-form-group {
		padding: 0rpx 0;
		background-color: #ffffff;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		min-height: 0;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
	}
	
	.cu-card>.cu-item {
		display: block;
		margin: 30rpx;
		height: 170rpx;
		background-color: #ffffff;
		overflow: hidden;
		border-radius: 10rpx;
		margin: 0;
		border-bottom: 0.5px solid #ddd;
	}


	.cu-card.article>.cu-item .title {
		padding-right: 0;
		font-size: 30rpx;
		font-weight: 900;
		color: #333333;
		line-height: 70rpx;
	}
	
	.cuIcon-right {
		font-size: 36rpx;
		padding-top: 50rpx;
		box-sizing: border-box;
		line-height: 100rpx;
	}
	
	.cu-card.article>.cu-item .content {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		padding: 0 30rpx;
		height: 50rpx;
	}

	

</style>
