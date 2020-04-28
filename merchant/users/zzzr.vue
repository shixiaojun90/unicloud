<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">执照转让</block>
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
		
		<!-- tab块开始 -->
		<scroll-view scroll-x class="bg-white nav text-center" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<!-- tab块结束 -->
		
		<view class="cu-bar margin-top bg-white">
			<view class="action">
				76897986张已上线
			</view>
			<view class="action">
				<button class="cu-btn bg-grey lg">增加执照</button>
			</view>
		</view>
		
		<!-- 消息列表开始 -->
		<block v-if="TabCur==0">
			<view class="cu-card article"> <!-- no-card -->
				<view class="cu-item">
					<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
					<view class="content">
						<view class="desc">
							<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
							<view>
								<view class="cu-tag bg-red light sm round">￥3000.00</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="cu-item">
					<view class="title"><view class="text-cut">公司名称</view></view>
					<view class="content">
						<view class="desc">
							<view class="text-content"> 经营范围*********</view>
							<view>
								<view class="cu-tag bg-red light sm round">￥5000.00</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</block>
		<block v-if="TabCur==1">
			<view class="cu-card article"> <!-- no-card -->
				<view class="cu-item">
					<view class="title"><view class="text-cut">公司名称1</view></view>
					<view class="content">
						<view class="desc">
							<view class="text-content">经营范围</view>
							<view>
								<view class="cu-tag bg-red light sm round">￥3000.00</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="cu-item">
					<view class="title"><view class="text-cut">公司名称1</view></view>
					<view class="content">
						<view class="desc">
							<view class="text-content">经营范围</view>
							<view>
								<view class="cu-tag bg-red light sm round">￥3000.00</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</block>
		<!-- 消息列表结束 -->
		
		<!-- 点击加载开始 -->
		<view class="cu-load bg-grey"  @tap="LoadModal">
			<view class="action">
				<text class="gray-text">加载更多</text>
			</view>
		</view>
		<view class="cu-load load-modal" v-if="loadModal">
			<!-- <view class="cuIcon-emojifill text-orange"></view> -->
			<image src="/static/logo.png" mode="aspectFit"></image>
			<view class="gray-text">加载中...</view>
		</view>
		<!-- 点击加载结束 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 0,
				avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'],
				tabNav: ['已上线', '已下线', '审核中'],
				loadModal: false,
				modalName: null,
				region: ['北京市', '北京市', '东城区'],
				
			};
		},
		
		methods: {
			LoadModal(e) {
				this.loadModal = true;
				setTimeout(() => {
					this.loadModal = false;
				}, 2000)
			},
			
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			
			RegionChange(e) {
				this.region = e.detail.value
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
