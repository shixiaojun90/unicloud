<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">淘企企</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索服务、需求或咨讯" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		
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
		
		<view class="cu-card article no-card"> <!-- no-card -->
			<view class="cu-item">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">￥3000.00</view>
							<view class="cu-tag bg-green light sm round">订单意向</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">￥5000.00</view>
							<view class="cu-tag bg-green light sm round">服务意向</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<!-- 消息列表结束 -->
		
		
		<!-- 底部开始 -->
		<view class="cu-bar tabbar bg-white">
			<view class="action text-green">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action text-gray add-action" @tap="toChild" :data-url="'/pages/xqzx/release'">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				发布
			</view>
			<view class="action text-gray" @tap="toChild" :data-url="'/pages/users/index'">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				我的
			</view>
			<view class="action text-gray" @tap="toChild" :data-url="'/merchant/index/index'">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				商户端
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
					name: '服务市场',
					url: '/pages/fwsc/list'
				}, {
					cuIcon: 'form',
					color: 'orange',
					badge: 1,
					name: '需求中心',
					url: '/pages/xqzx/list'
				}, {
					cuIcon: 'list',
					color: 'yellow',
					badge: 0,
					name: '资讯中心',
					url: '/pages/zxzx/list'
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
	
	.cu-card>.cu-item {
		display: block;
		background-color: #ffffff;
		overflow: hidden;
		border-radius: 10rpx;
		margin: 0;
		border-bottom: 0.5px solid #ddd;
	}

</style>
