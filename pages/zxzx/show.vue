<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">资讯详情</block>
		</cu-custom>
		<view class="bg-white padding-lr">
			<view class="padding bg-white">
				<view>满江红·写怀</view>
				<view class="cuIcon-countdown margin-top">
					2020.03.17 18:20
				</view>
				<view  class="margin-top">
					怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切！(栏 通：阑)
					靖康耻，犹未雪。臣子恨，何时灭！驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头、收拾旧山河，朝天阙。(壮志 一作：壮士；兰山缺 一作：兰山阙)
				</view>
			</view>
			
			<view class="cu-tag light sm round margin-top">浏览:4万+</view>
			
			<view class="flex-sub text-center  margin-top"  @tap="toChild" :data-url="'/pages/zxzx/report'">
				<text class="text-ml text-blue">若有信息展示错误或违规请点击此处举报</text>
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
