<!--商品上传-->
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
                    商品上传
                </text>
            </view>
            <view slot="right">
                <view class="cu-tag round bg-green">待接单</view>
            </view>
            <view style="height: 100%" class="flex flex-direction justify-between">
                <view>
                    <view class="padding">
                        <view class="cu-list menu sm-border card-menu">
                            <view class="cu-item">
                                <view class="">
                                    <view>
                                        <text>商品名称</text>
                                    </view>
                                    <text>
                                        <text class="text-grey">件数</text>
                                    </text>
                                </view>
                                <view>
                                    <button @click="goPage" class="cu-btn sm" style="background-color: #464C5B;color: #F0F0F0">上传附件</button>
                                </view>
                            </view>
                            <view class="cu-item">
                                <view class="">
                                    <view>
                                        <text>商品名称</text>
                                    </view>
                                    <text>
                                        <text class="text-grey">件数</text>
                                    </text>
                                </view>
                                <view>
                                    <button @click="goPage" class="cu-btn sm" style="background-color: #464C5B;color: #F0F0F0">上传附件</button>
                                </view>
                            </view>
                        </view>
                    </view>
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
        name: "goodsUpload",
        data(){
            return{
                detailedData:[
                    {
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS202",
                        "name": "Jeson",
                        "num": 1
                    }
                ]
            }
        },
        methods:{
            goPage(){
                uni.navigateTo({
                    url: '/pages/tasklist/file/fileUpload'
                });
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
