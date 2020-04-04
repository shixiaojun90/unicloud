<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">需求详情</block>
		</cu-custom>
		<view class="bg-white padding-lr">
			<view class="padding bg-white">
				<view class="action">
					<text class="cuIcon-order text-orange "></text>时间倒序
				</view>
				
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view>
							<text class="cuIcon-countdown text-blue margin-right-xs">还剩9天</text>
						</view>
						<view class="text-gray text-sm">
							<text class="text-black text-bold text-x2 margin-right-xs">收到222次服务</text></view>
					</view>
				</view>
				
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						<view class="content">
							<view class="text-grey">凯尔</view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">
									我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
								</view> </view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						<view class="content">
							<view class="text-grey">凯尔</view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">
									我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
								</view> </view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
						</view>
					</view>
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
