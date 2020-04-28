<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">需求详情</block>
		</cu-custom>
		<view class="bg-white padding-lr">
			<view class="padding bg-white">
				<view class="flex-sub text-center">
					<text class="text-xl margin-right-xs">满江红·写怀</text>
				</view>
				<view class="margin-top">
					<view class="cu-tag bg-red light sm round">￥3000.00</view>
					<view class="cu-tag bg-green light sm round">审计验资</view>
				</view>
				
				<view class="cu-item">
					<view class="content padding-tb-sm" @tap="toChild" :data-url="'/pages/xqzx/fwyx'">
						<view>
							<text class="cuIcon-countdown text-blue margin-right-xs">还剩9天</text>
						</view>
						<view class="text-gray text-sm">
							<text class="text-black text-bold text-x2 margin-right-xs">收到222次服务</text></view>
					</view>
					<view class="content padding-tb-sm">
						<view @tap="toChild" :data-url="'/pages/xqzx/archives'">
							<text class="cuIcon-peoplefill text-blue margin-right-xs">雇主名称：xxx</text></view>
					</view>
				</view>
				
				<view class="text-center padding">
					<text class="text-x1 margin-right-xs">
					     怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切！(栏 通：阑)
					靖康耻，犹未雪。臣子恨，何时灭！驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头、收拾旧山河，朝天阙。(壮志 一作：壮士；兰山缺 一作：兰山阙)
					</text>
				</view>
			</view>
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
