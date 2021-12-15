<template>
    <view class="bg-white wh">
        <view class="form">
            <view class="padding-lr-xxl">
<!--                logo-->
                <view class="flex justify-center" style="margin-top: 100px">
                    <image class="logo" src="../../static/logo.svg"></image>
                </view>
<!--                title-->
                <view class="flex justify-center title">
                    <text>贝业供应链</text>
                </view>
                <view class="inputWrapper" style="margin-top: 50px">
                    <input class="input" type="text" value="" placeholder="手机号"/>
                </view>
                <view class="inputWrapper">
                    <input class="input" type="password" value="" placeholder="密码"/>
                </view>
            </view>
            <view>
                <view class="padding-lr-xxl padding-bottom-lg">
                    <button class="cu-btn loginBtn bg-green shadow" @click="login">登录</button>
                </view>
                <view class="flex justify-center align-center padding-top-sm ">
                    <checkbox style="transform:scale(0.6);" class='blue' :class="select?'checked':''" :checked="select" @click="select=!select"></checkbox>
                    <text>我已阅读并同意贝业供应链<text class="text-red">隐私政策</text>和<text class="text-red">服务协议</text></text>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                select: false
            }
        },
        methods:{
            login(){
                if(!this.select){
                    uni.showToast({
                        icon:'none',
                        title: "请先勾选协议！"
                    })
                    return;
                }
                uni.switchTab({
                    url: '/pages/index/home'
                });
                // uni.reLaunch({
                //     url: '/pages/index/home'
                // })
            }
        }
    }
</script>

<style scoped lang="scss">
    .wh{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo{
        width: 135px;
        height: 135px;
    }
    .title{
        margin-top: 20px;
        font-size: 28px;
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
        font-weight: 700;
        font-style: normal
    }
    .form{
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /*margin-top: 80px;*/
    }
    .inputWrapper{
        width: 100%;
        height: 80upx;
        background: white;
        border-radius: 20px;
        border: 1px solid #797979;
        box-sizing: border-box;
        padding: 0 20px;
        margin-top: 25px;
    }
    .inputWrapper .input{
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 15px;
    }

    .loginBtn{
        width: 100%;
        height: 80upx;
        background: #2ecc71;
        border-radius: 50upx;
    }

</style>
