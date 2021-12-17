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
            <view style="height: inherit"  class="flex flex-direction justify-between">
                <view>
                    <view class="padding">
                        <uni-table border stripe emptyText="暂无更多数据">
                            <!-- 表头行 -->
                            <uni-tr>
                                <uni-th align="center">序号</uni-th>
                                <uni-th align="center">商品ID</uni-th>
                                <uni-th align="center">商品名称</uni-th>
                                <uni-th align="center">件数</uni-th>
                                <uni-th align="center" width="100"></uni-th>
                            </uni-tr>
                            <!-- 表格数据行 -->
                            <uni-tr v-for="(item,index) in detailedData" :key="index">
                                <uni-td align="center">{{index+1}}</uni-td>
                                <uni-td align="center">{{item.id}}</uni-td>
                                <uni-td align="center">{{item.name}}</uni-td>
                                <uni-td align="center">{{item.num}}</uni-td>
                                <uni-td align="center">
                                    <button @click="goPage" class="cu-btn sm" style="background-color: #464C5B;color: #F0F0F0">上传附件</button>
                                </uni-td>
                            </uni-tr>
                        </uni-table>
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

<style scoped>

</style>
