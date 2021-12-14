<template>
	<view>
		<header-bar bgColor="bg-gradual-pink" isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">导航栏</view>
		</header-bar>
		<view class="content">
			<image class="logo" src="/static/logo.png"></image>
			<view @click="login">
				<text class="title">{{title}}</text>
			</view>
			<view class="iconfont icon-lastest_bills line-blue"></view>
		</view>
	</view>
</template>

<script>
	import store from "../../http/store";
	import {getopenid} from "../../api/test";

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			login(){
				getopenid({url:'http://ibalbal.com'}).then(resp=>{
					console.log("resp",resp.data)
				}).catch(e=>{
					console.log(e)
				})
				// console.log("login")
				// let userinfo = {
				// 	username: 'name',
				// 	password: 'password',
				// 	code: 'code',
				// 	randomStr:'rand'
				// };
				// console.log("start ---> userinfo",userinfo)
				// store.dispatch('LoginByUsername',userinfo)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
