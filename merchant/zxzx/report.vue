<template>
	<view>
		<cu-custom bgColor="bg-grey" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">举报</block>
		</cu-custom>
		
		<form @submit="formSubmit">
			<view class="cu-form-group margin-top">
				<textarea name="info" placeholder="请输入举报原因"></textarea>
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
				
				ColorList: this.ColorList,
				modalName: null
			};
		},
		
		methods:{
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
