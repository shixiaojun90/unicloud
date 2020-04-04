<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{iconname}}</block>
		</cu-custom>
		
		<form @submit="formSubmit">
			<view class="cu-form-group margin-top">
				<view class="title">名称</view>
				<input placeholder="请输入5-24个字" name="name"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">最高预算</view>
				<input placeholder="最多支持俩位小数" name="gprice"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">最低预算</view>
				<input placeholder="最多支持俩位小数" name="dprice"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">周期</view>
				<picker @change="PickerChange" :value="index" :range="picker" name="time">
					<view class="picker">
						{{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 提示'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group margin-top">
				<textarea name="info" placeholder="描述"></textarea>
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
				index: -1,
				picker: ['一周', '半年', '一年'],
				ColorList: this.ColorList,
				modalName: null,
				iconname: null
			};
		},
		onLoad(options) {
			var typename = JSON.parse(options.type); // 字符串转对象
			//console.log(data)
			this.iconname = typename;
		},
		methods:{				
			PickerChange(e) {
				this.index = e.detail.value
			},
			
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
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
