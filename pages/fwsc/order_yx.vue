<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单意向详情</block>
		</cu-custom>
		
		<view class="bg-white">
			<view class="cu-item">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						<view class="content">
							<text>服务商名称</text>
						</view>
					</view>
				</view>
			</view>
			
			<form>
				<view class="cu-form-group margin-top">
					<view class="title">订单时间:</view>
					<input disabled value="2020-03-01"></input>
				</view>
				<view class="cu-form-group margin-top">
					<view class="title">服务价格:</view>
					<input disabled value="￥3000.00"></input>
				</view>
			</form>
			
			<!-- 底部结束 -->
			<view class="cu-card article no-card"> <!-- no-card -->
				<view class="cu-item shadow">
					<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
							<view>
								<view class="cu-tag bg-red light sm round">￥3000.00</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
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
