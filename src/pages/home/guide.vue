<template>
    <view class="bg-white">
        <view class="swiper-css zqui-rel" :style="{ height: hpx }">
            <swiper class="swiper" :style="{ height: hpx }" :indicator-dots="indicatorDots" :autoplay="autoplay"
                    :interval="interval" :duration="duration" @change="guideAction">
                <swiper-item class="flex1" v-for="(item, index) in imageList" :key="index">
                    <image class="flex-column image-size" mode="aspectFill" :src="item.src" />
                </swiper-item>
            </swiper>
            <!-- 按钮样式切换 -->
            <template v-if="cur != 2">
                <view class=" flex-column dots">
                    <block v-for="(item,index) in imageList" :key="index">
                        <view class="dot" :class="{'active':  index == cur}"></view>
                    </block>
                </view>
            </template>
            <!-- 第三张图使用按钮《立即进入》 -->
            <template v-if="cur == 2">
                <button class="flex-column cu-btn footer" @click="launchApp">立即体验</button>
            </template>
            <!-- 右上角跳过按钮 -->
            <view v-if="cur != 2" class="btn-box" @click="launchApp"><text class="passbtn">跳过</text></view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                //修改图片,文字描述
                imageList: [
                    {
                        src: 'http://www.ibalbal.com:9001/images/u2.jpg'
                    },
                    {
                        src: 'http://www.ibalbal.com:9001/images/u5.jpg'
                    },
                    {
                        src: 'http://www.ibalbal.com:9001/images/u9.jpg'
                    }
                ],
                //是否显示面板指示点
                indicatorDots: false,
                //是否自动切换
                autoplay: false,
                //动切换时间间隔
                interval: 10000,
                //滑动动画时长
                duration: 500,
                hpx: '100%',
                //当前页
                cur: 0,
            };
        },
        onLoad() {
            let that = this;
            uni.getSystemInfo({
                success: function(res) {
                    that.hpx = res.windowHeight + 'px';
                }
            });
        },
        methods: {
            launchApp() {
                //跳过引导页,储存本地值,下次进入直接跳过
                // uni.setStorage({
                //     key: 'launchFlag',
                //     data: true,
                //     success() {
                //         uni.reLaunch({
                //             url: '/pages/home/index'
                //         })
                //     }
                // });
                uni.reLaunch({
                    url: '/pages/login/index'
                })
            },
            guideAction(event) {
                let that = this,
                    index = event.detail.current;
                that.cur = index;

            },
        }
    };
</script>

<style lang="scss">
    page {
        background-color: #FFFFFF;
        min-height: 100%;
        height: 100%;
    }

    .guide {
        flex-direction: column;
        flex: 1;
    }

    .flex1 {
        flex: 1;
        width: 100%;
        background: red;
        height: 100%;
    }

    .image-size {
        width: 750rpx;
        height: 100%;
        position: absolute;
        // margin-left: 60rpx;
    }

    // .title-box {
    //  padding: 250rpx 0 120rpx 64rpx;
    // }

    .guide-title {
        font-size: 48rpx;
        font-weight: bold;
        color: rgba(58, 61, 68, 1);
    }

    .guide-subtitle {
        margin-top: 20rpx;
        font-size: 35rpx;
        color: rgba(131, 136, 146, 1);
        line-height: 50rpx;
    }

    .footer {
        width: 231rpx;
        height: 80rpx;
        text-align: center;
        position: fixed;
        bottom: 116rpx;
        left: 37%;
        font-size: 30rpx;
        color: #FFFFFF;
        background-color: #2B9939;
    }

    .btn-box {
        position: absolute;
        z-index: 99999;
        left: 40rpx;
        top: 120rpx;
    }

    .dots {
        display: flex;
        justify-content: center;
        position: absolute;
        z-index: 999;
        height: 151rpx;
        left: 0;
        right: 0;
        bottom: 20rpx;
    }

    .passbtn {
        color: #fff;
        text-align: center;
        border-width: 1rpx;
        border-color: rgba(0, 0, 0, 0.5);
        border-style: solid;
        border-radius: 30rpx;
        font-size: 28rpx;
        padding-top: 10rpx;
        padding-bottom: 10rpx;
        padding-left: 25rpx;
        padding-right: 25rpx;
    }

    .dot {
        margin: 0 4rpx;
        width: 15rpx;
        height: 15rpx;
        background: #CDD2DD;
        border-radius: 8rpx;
        transition: all .6s;
    }

    .dot.active {
        width: 40rpx;
        background: #838892 !important;
    }

    /* 相对定位 */
    .zqui-rel {
        position: relative;
    }

    .swiper-css {
        width: 750rpx;
    }

    .swiper-item {
        width: 750rpx;
    }
</style>
