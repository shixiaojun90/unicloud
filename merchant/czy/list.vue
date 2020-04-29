<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">管理操作员</block>
		</cu-custom>
		
		<view class="cu-bar margin-top bg-white">
			<view class="action">
				已有76897986位管理操作员
			</view>
		</view>
		
		<!-- tab块开始 -->
		<scroll-view scroll-x class="bg-white nav text-center" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<!-- tab块结束 -->
		<!-- 消息列表开始 -->
		<block v-if="TabCur==0">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					<view class="content">
						<view class="text-grey">操作员微信昵称</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);"></view>
					<view class="content">
						<view class="text-grey">
							<view class="text-cut">操作员微信昵称</view>
						</view>
					</view>
				</view>
			</view>
		</block>
		
		<block v-if="TabCur==1">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					<view class="content">
						<view class="text-grey">操作员微信昵称</view>
					</view>
				</view>
			</view>
		</block>
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
				TabCur: 0,
				tabNav: ['操作员','申请'],
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
			
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
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
