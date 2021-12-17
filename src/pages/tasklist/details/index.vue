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
                    PS2021120200001
                </text>
            </view>
            <view slot="right">
                <view class="cu-tag round bg-green">待接单</view>
            </view>
            <view class="flex flex-direction justify-between">
                <view class="cu-bar bg-white solid-bottom">
                    <view class="action">
                        <text class="text-bold">详情</text>
                    </view>
                    <view class="action">
                        <button class="cu-btn sm bg-red" data-target="gridModal">整单退回</button>
                        <button class="cu-btn sm bg-blue margin-left-sm" data-target="gridModal">部分退回</button>
                    </view>
                </view>
                <form>
                    <view class="cu-form-group">
                        <view class="title">服务单号</view>
                        <input placeholder="" value="PS2021120200001" name="input"></input>
                    </view>
                    <view class="cu-form-group">
                        <view class="title">客户姓名</view>
                        <input placeholder="" value="周小厨" name="input"></input>
                    </view>
                    <view class="cu-form-group solid-top">
                        <view class="title">手机号</view>
                        <input placeholder="" value="15521052031" name="input"></input>
                    </view>
                    <view class="cu-form-group">
                        <view class="title">地址</view>
                        <input placeholder="" value="上海市松江区石湖荡街道闵塔公里1018号上海市松江区石湖荡街道闵塔公里1018号" name="input"></input>
                    </view>
                    <view class="cu-form-group">
                        <view class="title">备注</view>
                        <input placeholder="" value="轻拿轻放" name="input"></input>
                    </view>
                    <view class="cu-form-group">
                        <view class="title">总件数</view>
                        <input placeholder="" value="1" name="input"></input>
                    </view>
                    <view class="cu-form-group solid-top">
                        <view class="title">预约上门时间</view>
                        <input placeholder="" value="2021-12-02  12:00" name="input"></input>
                    </view>
                </form>
                <view class="bg-white solid-top">
                    <view class="cu-bar">
                        <view class="action">
                            <text class="text-bold">商品明细</text>
                        </view>
                    </view>
                    <view class="padding-lr padding-bottom-lg">
                        <uni-table border stripe emptyText="暂无更多数据">
                            <!-- 表头行 -->
                            <uni-tr>
                                <uni-th align="center">序号</uni-th>
                                <uni-th align="center">商品ID</uni-th>
                                <uni-th align="center">商品名称</uni-th>
                                <uni-th align="center">件数</uni-th>
                            </uni-tr>
                            <!-- 表格数据行 -->
                            <uni-tr v-for="(item,index) in detailedData" :key="index">
                                <uni-td align="center">{{index+1}}</uni-td>
                                <uni-td align="center">{{item.id}}</uni-td>
                                <uni-td align="center">{{item.name}}</uni-td>
                                <uni-td align="center">{{item.num}}</uni-td>
                            </uni-tr>
                        </uni-table>
                    </view>
                </view>
                <view class="flex justify-center margin-bottom-lg">
                    <button @click="goPage" class="cu-btn bg-green padding-tb-lg padding-lr-xxl">接单</button>
                </view>
            </view>
        </main-content>
    </view>
</template>

<script>
    export default {
        name: "index",
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
                    }
                ]
            }
        },
        methods:{
            goPage(){
                uni.navigateTo({
                    url: '/pages/tasklist/file/goodsUpload'
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .cu-form-group .title {
        min-width: calc(4em + 15px);
    }
</style>
