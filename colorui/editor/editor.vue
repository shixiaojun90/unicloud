<template>
    <view class='wrapper'>
        <topbar class="header" @cancel="cancel" @save="save" :labelConfirm="labelConfirm" :labelCancel="labelCancel"></topbar>
        <view :style="'height:'+editorHeight+'px;'" class="container">
            <editor v-if="!previewMode" v-show="!showPreview" id="editor" class="ql-container" placeholder="开始输入..."
                showImgSize showImgToolbar showImgResize @statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady">
            </editor>
        </view>
        <view class='toolbar' @tap="format" v-if="!showPreview" v-show="keyboardHeight || !autoHideToolbar" :style="'bottom:'+ (isIOS ? keyboardHeight : 0)+'px'">
            <block v-for="(t,i) in tools" :key="i">
                
                <view v-if="t=='image'" class="iconfont icon-charutupian" @tap.stop="insertImage"></view>
                
            </block>
        </view>
        <view class="preview" v-show="showPreview">
            <rich-text :nodes="htmlData" class="previewNodes"></rich-text>
        </view>
    </view>
</template>

<script>
    //import colorPicker from './colorPicker.vue'
    //import uniPopup from "./uni-popup.vue"
    //import topbar from './header.vue'
    export default {
		name: "myeditor",
        components: {
            //colorPicker,
            //uniPopup,
            //topbar
        },
        props: {
            imageUploader: {
                type: Function
            },
            muiltImage: {
                type: Boolean,
                default: false
            },
            compressImage: {
                type: Boolean,
                default: false
            },
			
            tools: {
                type: Array,
                default: function() {
                    return ['image']
                }
            }
        },
        data() {
            return {
                show: true,
                readOnly: false,
                formats: {},
                fontColor: "#000000",
                bgColor: "",
                color: "",
                colorPickerName: "",
                showColor: false,
                fontSizeRange: [10, 12, 14, 16, 18, 24, 32],
                showPreview: false,
                htmlData: "",
                keyboardHeight: 0,
                editorHeight: 0,
                isIOS: false
            }
        },
        mounted: function() {
            const platform = uni.getSystemInfoSync().platform
            this.isIOS = platform === 'ios'
            if (this.previewMode) {
                this.previewData(this.html)
            }
            let keyboardHeight = 0
            this.updatePosition(0)
            uni.onKeyboardHeightChange(res => {
                if (res.height === keyboardHeight) return
                const duration = res.height > 0 ? res.duration * 1000 : 0
                keyboardHeight = res.height
                setTimeout(() => {
                    uni.pageScrollTo({
                        scrollTop: 0,
                        success: () => {
                            this.updatePosition(keyboardHeight)
                            this.editorCtx && this.editorCtx.scrollIntoView()
                        }
                    })
                }, duration)
            })
        },
        
        methods: {
            updatePosition(keyboardHeight) {
                const {
                    windowHeight,
                    windowWidth,
                    platform
                } = uni.getSystemInfoSync()
                const rpx = windowWidth / 75
                let topbarHeight = 85 * rpx;
                //#ifdef H5
                topbarHeight += 44;
                //#endif
                const toolbarHeight = (70 * Math.ceil(this.tools.length / 15) + 1) * rpx

                const bodyHeight = windowHeight - topbarHeight
                this.keyboardHeight = keyboardHeight
                this.editorHeight = keyboardHeight > 0 ? (bodyHeight - keyboardHeight - toolbarHeight) : (this.autoHideToolbar ?
                    bodyHeight : bodyHeight - toolbarHeight)
            },
            
			onEditorReady() {
				uni.createSelectorQuery().in(this).select('#editor').context((res) => {
					this.editorCtx = res.context
					if (this.html) {
						this.editorCtx.setContents({
							html: this.html
						})
					}
				}).exec()
			},
			
			onStatusChange(e) {
				const formats = e.detail
				this.formats = formats
			},
									
            insertImage() {
                let params = {}
                params.count = this.muiltImage ? 9 : 1
                params.sizeType = this.compressImage ? ['compressed'] : ['original']
                uni.chooseImage({
                    ...params,
                    success: (res) => {
                        res.tempFilePaths.map(path => {
                             this.imageUploader(path, (url) => {
                                 this.editorCtx.insertImage({
                                     src: url,
                                     alt: '图像'
                                 })
                             })
                        })
                    }
                })
            },
            
            previewData: function(html) {
                this.htmlData = html.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
                this.showPreview = true
            },
            preview: function() {
                this.editorCtx.getContents({
                    success: res => {
						console.log(res);
                        this.previewData(res.html)
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./editor-icon.css";

    .wrapper {
        padding: 5px;
        width: 100%;

        .header {
            width: 100%;
            //position: fixed;
            z-index: 9;
            right: 0;
            /* #ifndef H5 */
            top: 0;
            /* #endif */
            /* #ifdef H5 */
            top: 44px;
            /* #endif */

        }

        .container {
            width: 100%;
            margin-top: 75rpx;
            background: #fff;

            .ql-container {
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                font-size: 16px;
                line-height: 1.5;
                overflow: auto;
                padding: 20rpx;
            }
        }

        .toolbar {
            //position: fixed;
            width: 100%;
            right: 0;
            bottom: 0;
            box-sizing: border-box;
            font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
            background-color: #fff;
            border-top: 1px solid #eee;
            line-height: 50rpx;

            .iconfont {
                display: inline-block;
                padding: 10rpx 0;
                width: 100%;
                text-align: right;
                font-size: 34rpx;
                box-sizing: border-box;
            }
        }
    }





    .preview {
        width: 100%;
        margin-top: 90rpx;

        .previewNodes {
            width: 100%;
        }
    }

    .ql-active {
        color: #06c;
    }
</style>
