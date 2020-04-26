<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">入驻淘企企</block>
		</cu-custom>
		
		<form @submit="formSubmit">
			<view class="cu-form-group margin-top">
				<view class="title">商户名称</view>
				<input placeholder="请输入商户名称" name="name"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">地理位置</view>
				<input placeholder="地理位置" name="locaction" v-model="locaction"></input>
				<button class='cu-btn bg-green shadow' @tap.stop="getLocation">获取</button>
			</view>
			
			<!-- 商户标志图像上传开始 -->
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					商户标志
				</view>
				<view class="action">
					{{imgList.length}}/20
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="Imagelist" v-if="imgList.length<20">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<!-- 商户标志图像上传开始 -->
			
			<!-- 风采照片图像上传开始 -->
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					风采照片
				</view>
				<view class="action">
					{{imgList1.length}}/20
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item1,index1) in imgList1" :key="index1" @tap="ViewImage1" :data-url="imgList1[index1]">
					 <image :src="imgList1[index1]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg1" :data-index="index1">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="Imagelist1" v-if="imgList1.length<20">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<!-- 风采照片图像上传开始 -->
			
			<view>
				<myeditor class="editor" 
				    @cancel="hideEditor" 
				    @save="saveEditor" 
				    :html="html"
				    :imageUploader="uploadImg"
				    :muiltImage="true">
				</myeditor>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">手机号码</view>
				<input placeholder="手机号码" name="name"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">微信号码</view>
				<input placeholder="微信号码" name="name"></input>
			</view>
			<view class="box">
				<view class="cu-bar btn-group">
					<button form-type="submit" class="cu-btn bg-blue shadow-blur round">提交</button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: {
					info: ''
				},
				//index: -1,
				picker: ['一周', '半年', '一年'],
				ColorList: this.ColorList,
				modalName: null,
				iconname: null,
				imgList: [],
				imgList1: [],
				locaction: ''
			};
		},
		
		methods:{				
			// PickerChange(e) {
			// 	this.index = e.detail.value
			// },
			
			// textareaAInput(e) {
			// 	this.textareaAValue = e.detail.value
			// },
			
			uploadImg: function(img, callback) {
				//上传图片逻辑,将图片链接传给回调函数
				callback(img)
			},
			
			//获取地理位置
			getLocation() {
				var _this = this;
				uni.chooseLocation({
				    success: function (res) {
				        //console.log('位置名称：' + res.name);
				        //console.log('详细地址：' + res.address);
				        // console.log('纬度：' + res.latitude);
				        // console.log('经度：' + res.longitude);
						_this.locaction = res.name;
				    }
				});
			},
			
			//商户标志
			Imagelist() {
				uni.chooseImage({
					count: 20, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '删除图片',
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			
			//风采照片
			Imagelist1() {
				uni.chooseImage({
					count: 20, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList1.length != 0) {
							this.imgList1 = this.imgList1.concat(res.tempFilePaths)
						} else {
							this.imgList1 = res.tempFilePaths
						}
					}
				});
			},
			ViewImage1(e) {
				uni.previewImage({
					urls: this.imgList1,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg1(e) {
				uni.showModal({
					title: '删除图片',
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList1.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			
			formSubmit: function(e) {
				//console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				if(!formdata.info){
					uni.showModal({
						content: '请填写内容',
						showCancel: false
					});
					return;
				}
				//开始发送数据
				uni.request({
				    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
				    data: {
				        text: formdata.info
				    },
				    header: {
				        //'custom-header': 'hello'
						'content-type': 'application/json'
				    },
				    success: (res) => {
				        console.log(res.data);
				        this.text = 'request success';
				    }
				});
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
	
	.box {
		margin: 20upx 0;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}

	
</style>
