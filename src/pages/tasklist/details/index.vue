<template>
    <view class="bg-white">
        <header-bar bgColor="bg-white">
            <view slot="content">
                <text class="text-bold">贝业供应链</text>
            </view>
        </header-bar>
        <main-content is-back="true">
            <view slot="content">
                <text>
                    PS2021120200001
                </text>
            </view>
            <view slot="right">
                <view class="cu-tag round bg-green">待接单</view>
            </view>
        </main-content>
    </view>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
