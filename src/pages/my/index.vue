<template>
    <view class="bg-white">
        <header-bar bgColor="bg-white">
            <view slot="content">
                <text class="text-black text-bold">贝业供应链</text>
            </view>
        </header-bar>
        <main-content class="bg-white">

            <view style="height: inherit"  class="flex flex-direction justify-between">
                <view class="padding margin-top-lg">
                    <view class="flex margin-left">
                        <!--                <view class="cu-avatar xl round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>-->
                        <view class="cu-avatar xl round" style="background-image:url('http://www.ibalbal.com:9001/iby/logo.png')" ></view>
                        <view class="margin-left margin-top">
                            <text class="name">周小厨</text>
                        </view>
                    </view>
                    <view class="cu-card article" >
                        <view @click="goPage('/pages/my/allTaskList')" class="cu-item shadow-warp padding padding-left-xl">
                            <view class="content iconfont icon-gtasks" style="font-size: 18px !important;color: #333333"></view>
                            <view class="">
                                <text style="color: #333333" class="text-bold">历史任务</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="flex justify-center margin-bottom-lg">
                    <button @click="goLogin()" class="round cu-btn line-black padding-tb-lg padding-lr-xxl">退出登录</button>
                </view>
            </view>
        </main-content>
    </view>
</template>

<script>
    export default {
        name: "index",
        methods:{
            goPage(url){
                uni.navigateTo({
                    url: url
                });
            },
            goLogin(){
                uni.reLaunch({
                    url: '/pages/login/index'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.name{
    color: #333333;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
}
</style>
