<!--主题内容-->
<template>
    <view class="main" :style="styleMainHeight">
<!--头部-->
        <view v-if="isHand" class="flex bg hand padding-xs">
            <view class="flex flex-sub align-center justify-center flex-sub">
                <text v-if="isBack" @click="BackPage" class="iconfont icon-back text-df" style="white-space:nowrap"> 返回</text>
            </view>
            <view class="flex flex-twice align-center justify-center padding-sm">
                <slot name="content"/>
            </view>
            <view class="flex flex-sub align-center justify-center">
                <slot name="right"/>
            </view>
        </view>
<!--头部搜索-->
        <view v-if="isSearch" class="cu-bar search">
            <view class="search-form radius">
                <text class="iconfont icon-search padding"/>
                <input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="请输入单号，客户名称，客户手机号进行查询" confirm-type="search"/>
            </view>
        </view>
<!--内容-->
        <scroll-view class="text-black" enable-back-to-top scroll-y scroll-with-animation :style="styleContentHeight" >
           <slot></slot>
        </scroll-view>
    </view>
</template>

<script>
    export default {
        props:['isHand','isSearch','isBack'],
        name: "mainContent",
        data(){
            return{
                InputBottom:0,
            }
        },
        computed:{
            styleMainHeight(){
                // return "height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2) - " + this.CustomBar + "px)"
                return "min-height: calc(100vh - " + this.CustomBar + "px)"
            },
            styleContentHeight(){
                let str=''
                if(this.isHand){
                    //38px
                    str += " - 90rpx"
                }
                if(this.isSearch){
                    //100rpx
                    str += " - 100rpx "
                }
                console.log(str)
                return "height: calc(100vh "+str+" - " + this.CustomBar + "px)"
            }
        },
        methods:{
            BackPage() {
                if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
                    let url = '/' + __wxConfig.pages[0]
                    return uni.redirectTo({url})
                }
                uni.navigateBack({
                    delta: 1
                });
            },
            InputFocus(e) {
                console.log("触发焦点")
                this.InputBottom = e.detail.height
            },
            InputBlur(e){
                console.log("失去焦点")
                this.InputBottom = 0
            },
        }
    }
</script>

<style scoped lang="scss">
.main{
    .hand{
        height: 90rpx !important;
    }
}
</style>
