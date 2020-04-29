<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">淘企企</block>
		</cu-custom>
		
		<!-- 轮播图开始 -->
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<!-- 轮播图结束 -->
		
		<!-- tab块开始 -->
		<!-- <navigator> -->
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view @tap="toChild" :data-url="item.url" class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]"></view>
					<text>{{item.name}}</text>
				</view>
			</view>
		<!-- </navigator> -->
		<!--  tab块结束 -->
		
		<!-- <view>
			<drag-button
				:isDock="true"
				:existTabBar="true"
				@btnClick="btnClick"
				@btnTouchstart="btnTouchstart"
				@btnTouchend="btnTouchend" />
		</view> -->
		<!-- 消息列表开始 -->
		<view class="cu-card article margin-top"> <!-- no-card -->
			<view class="cu-item">
				<view class="cu-form-group">
					<view class="title">7898</view>
					<text class="cuIcon-right"></text>
				</view>
				<view class="content">
					<view class="desc">
						<view class="text-content">订单意向的新增数据</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="cu-form-group">
					<view class="title">17%</view>
					<text class="cuIcon-right"></text>
				</view>
				<view class="content">
					<view class="desc">
						<view class="text-content">雇主在服务详情页发送订单意向的转化率</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="cu-form-group">
					<view class="title">22%</view>
					<text class="cuIcon-right"></text>
				</view>
				<view class="content">
					<view class="desc">
						<view class="text-content">雇主看到服务意向采用的转化率</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 消息列表结束 -->
		
		
		<!-- 底部开始 -->
		<view class="cu-bar tabbar bg-white">
			<view class="action text-green">
				<view class="cuIcon-homefill"></view> 管理
			</view>
			
			<view class="action text-gray" @tap="toChild" :data-url="'/merchant/shzx/index'">
				<view class="cuIcon-my"></view>
				商户
			</view>
		</view>
		<!-- 底部结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}],
				cuIconList: [{
					cuIcon: 'service',
					color: 'red',
					badge: 120,
					name: '订单意向',
					url: '/merchant/fwsc/list'
				}, {
					cuIcon: 'form',
					color: 'orange',
					badge: 1,
					name: '雇主资料',
					url: '/merchant/xqzx/list'
				}, {
					cuIcon: 'list',
					color: 'yellow',
					badge: 0,
					name: '管理服务',
					url: '/merchant/zxzx/list'
				}, {
					cuIcon: 'list',
					color: 'yellow',
					badge: 0,
					name: '恢复评论',
					url: '/merchant/zxzx/list'
				}, {
					cuIcon: 'list',
					color: 'yellow',
					badge: 0,
					name: '增加服务',
					url: '/merchant/zxzx/list'
				}, {
					cuIcon: 'list',
					color: 'yellow',
					badge: 0,
					name: '关注需求',
					url: '/merchant/zxzx/list'
				}],
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
		height: 615rpx;
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
