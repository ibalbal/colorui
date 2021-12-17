<!--附件上传-->
<template>
    <view class="bg-white">
        <header-bar bgColor="bg-white">
            <view slot="content">
                <text class="text-black text-bold">贝业供应链</text>
            </view>
        </header-bar>
        <main-content is-hand="true" is-back="true">
            <view slot="content">
                <text>
                    附件上传
                </text>
            </view>
            <view slot="right">
                <view class="cu-tag round bg-green">待接单</view>
            </view>
            <view style="height: inherit"  class="flex flex-direction justify-between">
                <view>
                    <mk-upload
                            :imgList="imgList"
                            @onDelete="onDelete"
                            @onChoose="onChoose"
                    />
                </view>
                <view class="flex justify-center margin-bottom-lg">
                    <button class="cu-btn bg-green padding-tb-lg padding-lr-xxl">完工</button>
                </view>
            </view>
        </main-content>
    </view>
</template>

<script>
    export default {
        name: "fileUpload",
        data(){
            return{
                imgList:[]
            }
        },
        methods:{
            onDelete(index){
                console.log(index)
                //删除成功回调后执行 只做演示
                uni.showLoading({
                    title: '删除中'
                });
                setTimeout(()=>{
                    this.imgList.splice(index, 1);
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        duration: 1000
                    });
                }, 1000);
            },
            onChoose(e){
                console.log(e)
                //上传成功后回调执行push  只做演示
                uni.showLoading({
                    title: '上传中'
                });
                setTimeout(()=>{
                    const tempFilePaths = e.tempFilePaths;
                    this.imgList.push(tempFilePaths[0]);
                    uni.hideLoading();
                }, 1000);
            }
        }
    }
</script>

<style scoped>

</style>
