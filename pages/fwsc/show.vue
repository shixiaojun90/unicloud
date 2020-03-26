<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">服务详情</block>
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
		
		<view class="bg-white padding-lr">
				<view class="cu-item shadow">
					<view class="content">
						<view class="desc">
							<view class="text-content"> 服务详情服务详情服务详情服务详情服务详情服务</view>
							<view>
								<view class="cu-tag bg-red light sm round">￥5000.00</view>
								<view class="cu-tag bg-green light sm round">服务量：4万+</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="cu-item">
					<view class="content padding-tb-sm" @tap="toChild" :data-url="'/pages/fwsc/comment'">
						<view>
							<text class="margin-right-xs">5.0分</text>
						</view>
						<view class="text-gray text-sm">
							<text class="text-black text-bold text-x2 margin-right-xs">评论</text></view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="content">
								<text>服务商名称</text>
							</view>
						</view>
					</view>
				</view>
				
				<view class="text-center padding">
					<text class="text-x1 margin-right-xs">
					     怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切！(栏 通：阑)
					靖康耻，犹未雪。臣子恨，何时灭！驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头、收拾旧山河，朝天阙。(壮志 一作：壮士；兰山缺 一作：兰山阙)
					</text>
				</view>
		</view>
		<!-- 底部结束 -->
		
		<!-- 底部开始 -->
		<view class="cu-bar tabbar bg-white">
			<view class="action text-green">
				<view></view> 首页
			</view>
			
			<view class="action text-green">
				<view></view> 收藏
			</view>
			
			<view class="action text-green">
				<button class="cu-btn bg-green shadow"  @tap="toChild" :data-url="'/pages/fwsc/order_yx'">发送订单意向</button>
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
				dotStyle: true,
				modalName: null,
				//ColorList: this.ColorList,
			};
		},
		onLoad() {
			
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
