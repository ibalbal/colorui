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
                        <input disabled placeholder="空" value="PS2021120200001" name="input"></input>
                    </view>
                    <view class="cu-form-group">
                        <view class="title">客户姓名</view>
                        <input disabled placeholder="空" value="周小厨" name="input"></input>
                    </view>
                    <view class="cu-form-group solid-top">
                        <view class="title">手机号</view>
                        <input disabled placeholder="空" value="15521052031" name="input"></input>
                    </view>
                    <view class="cu-form-group">
                        <view class="title">地址</view>
                        <input disabled placeholder="空" value="上海市松江区石湖荡街道闵塔公里1018号上海市松江区石湖荡街道闵塔公里1018号" name="input"></input>
                    </view>
                    <view class="cu-form-group">
                        <view class="title">备注</view>
                        <input placeholder="" value="轻拿轻放" name="input"></input>
                    </view>
                    <view class="cu-form-group cu-form-group">
                        <view class="title">总件数</view>
                        <input placeholder="" value="1" name="input"></input>
                    </view>
                    <view class="cu-form-group solid-top">
                        <view class="title">预约上门时间</view>
                        <biaofun-datetime-picker
                        @change="TimeChange"
                        ></biaofun-datetime-picker>
                    </view>
                </form>
                <view class="bg-white solid-top">
                    <view class="cu-bar">
                        <view class="action">
                            <text class="text-bold">商品明细</text>
                        </view>
                    </view>
                    <view class="padding-lr padding-bottom">
                        <view class="cu-list menu sm-border card-menu">
                            <view class="cu-item" v-for="(item,index) in detailedData"　:key="index">
                                <view class="flex">
                                    <view class="flex justify-center align-center">
                                        <checkbox @click="selectCheck(index)" style="transform:scale(0.6);" class="checked" :value="item.id"></checkbox>
                                    </view>
                                    <view class="margin-left">
                                        <view>
                                            <text>{{item.name}}</text>
                                        </view>
                                        <text>
                                            <text class="text-grey">{{item.num}}</text>
                                        </text>
                                    </view>
                                </view>
                                <view>
                                    <text>状态</text>
                                </view>
                            </view>
                        </view>
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
                time:'1',
                checkedArr:[],
                detailedData:[
                    {
                        "id": "PS2021",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS2022",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS2023",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS2024",
                        "name": "Jeson",
                        "num": 1
                    },{
                        "id": "PS2025",
                        "name": "Jeson",
                        "num": 1
                    }
                ]
            }
        },
        methods:{
            TimeChange(e) {
                console.log(e);
            },
            goPage(){
                uni.navigateTo({
                    url: '/pages/tasklist/file/goodsUpload'
                });
            },
            selectCheck(index){
                let numberIndex = this.checkedArr.indexOf(index)
                if(numberIndex === -1){
                    this.checkedArr.push(index)
                }else {
                    this.checkedArr.splice(numberIndex,1)
                }
            },
            test(){
                console.log("check:",this.checkedArr)
            }
        }
    }
</script>

<style scoped lang="scss">
    .cu-form-group .title {
        min-width: calc(4em + 15px);
    }
</style>
