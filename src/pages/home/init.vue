<template>

</template>

<script>
    export default {
        name: "init",
        onLoad(){
            // 从本地缓存中同步获取指定 key 对应的内容，用于判断是否是第一次打开应用
            const value = uni.getStorageSync('launchFlag');
            if (value) {
                // 如何已经有，直接去home首页
                // uni.switchTab({
                //     url: '/pages/home/index'
                // });
                uni.reLaunch({
                    url: '/pages/home/index'
                })
            } else {
                uni.redirectTo({
                    url: '/pages/home/guide'
                });
            }
        }
    }
</script>

<style scoped>

</style>
