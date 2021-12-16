<template>
    <view class="bg-white">
        <header-bar bgColor="bg-white">
            <view slot="content">
                <text class="text-bold">贝业供应链</text>
            </view>
        </header-bar>
        <main-content is-search="true" is-back="true">
            <view slot="right">
                <view class="cu-capsule">
                    <view v-show="false" class='cu-tag'/>
                    <view @click="changeTabIndex(0)" :class="tabIndex===0?'bg-green':''" class='cu-tag line-white padding padding-lr-xl'>
                        待处理
                    </view>
                    <view @click="changeTabIndex(1)" :class="tabIndex===1?'bg-green':''" class="cu-tag line-white padding padding-lr-xl">
                        处理中
                    </view>
                    <view @click="changeTabIndex(2)" :class="tabIndex===2?'bg-green':''" class="cu-tag line-white padding padding-lr-xl">
                        已完工
                    </view>
                </view>
            </view>
            <view class="cu-card">
                <navigator url="/pages/tasklist/details/index" hover-class="navigator-hover" v-for="(item,index) in 10" :key="index" class="cu-item shadow-warp">
                    <view class="flex  justify-around solid" style="background-color: #f2f2f2">
                        <view class="margin-left-sm">
                            <view class="cu-avatar round bg-white" style="border:1px solid #11cffe">
                                <text class="text-df text-bold" style="color: #006699">安装</text>
                            </view>
                        </view>
                        <view class="margin-left text-bold padding-tb-sm">
                            <view>PS2021120200001</view>
                            <view class="flex justify-between">
                                <text>周小厨{{index+1}} </text>
                                <text style="color: #0000FF">15521052031</text>
                                <text></text>
                            </view>
                            <view>上海市松江区石湖荡街道闵塔公里1018号</view>
                            <view>完工时间：<text>2021-12-02  13:00:02</text></view>
                            <view>备注：<text>轻拿轻放</text></view>
                        </view>
                        <view>
                            <view class="cu-tag round bg-green">待接单</view>
                        </view>
                    </view>
                </navigator>
            </view>
        </main-content>
    </view>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                //选项索引
                tabIndex:0
            }
        },
        methods:{
            //索引改变事件
            changeTabIndex(index){
                this.tabIndex = index
            }
        }
    }
</script>

<style scoped>

</style>
