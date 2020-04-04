<template>
	<view class="cu-dialog" @tap.stop>
		<view class="banner">
			<view class="img">
				<image src="../../static/ewm.jpg" mode=""></image>
			</view>
			<view class="tgtit">推广链接：<text class="tugurl">http://taoqiqi.com?id=3228969</text></view>
			<view class="sharbuttn">
				<view class="btn" @click="save">保存二维码</view>
				<view class="btn" @click="sharurl">复制推广链接</view>
			</view>
			
			<!-- <button class="btn" @click="share">分享</button> -->
			<view class="shartitle"><view>分享</view></view>
			<view class="sharapk" @click="share">
				<view><image src="../../static/weact.png"></image></view>
				<view><image src="../../static/shar.png"></image></view>
				<view><image src="../../static/qq.png"></image></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'fen-xiang',
		data() {
			return {
				//ColorList: this.ColorList,
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

	.tugurl{
		color: #999;
	}
	.sharbuttn{
		display: flex;
		justify-content: center;
	}
	.shartitle{
		    width: 80%;
			text-align: center;
			margin-left: 10%;
			border-bottom: 1px solid #dddddd;
			position: relative;
			height: 60upx;
	}
	.tgtit{
		text-align: center;
	}
	.shartitle view{
		    height: 50upx;
			line-height: 50upx;
			font-size: 28upx;
			color: #999;
			width: 120upx;
			margin: 32upx auto;
			position: absolute;
			background: #fff;
			left: 50%;
			margin-left: -60upx;
	}
	.sharapk{
	 display: flex;
	 justify-content: center;
	 margin: 20upx auto
	}
	.sharapk view{
		margin: 40upx;
	}
	.sharapk view image{
		height: 80upx;
		width: 80upx;
	}
	.banner{
		width: 100% ;
		background-color: #FFFFFF;
		border-radius: 60upx 60upx 0 0;
		/* margin-top: -60upx; */
	}
	.banner dl{
		/* margin-top: -80upx; */
	}
	.banner dl dt{
		text-align: center;
	}
	.banner dl dt image{
		width: 160upx;
		height: 160upx;
		border-radius:50% ;
	}
	.banner dl dd{
		text-align: center;
	}
	.img{
		width: 300upx;
		height: 300upx;
		background-color: red;
		margin: 0 auto;
		margin-top: 60upx;
	}
	.img image{
		width: 100%;
		height: 100%;
	}
	.btn{
		width: 260upx;
		height: 60upx;
		line-height: 60upx;
		margin: 0 auto;
		margin-top: 60upx;
		border-radius: 40upx;
		border: 0;
		font-size: 26upx;
		outline: 0;
		background: #33b17b;
		color: #FFFFFF;
		text-align: center;
	}
	.bottom{
		width: 100%;
		height: 400upx;
	/* 	background: url(../../static/img/beij.png) no-repeat; */
		background-position:left bottom;/* 设置背景图片位置 */
		background-size: 20%;
	}
	.bottom ul{
		padding-left: 40upx;
		box-sizing: border-box;
	}
	.bottom ul li{
		width: 100%;
		height: 60upx;
	}
</style>
