<template>
	<view class="bg-white">
		<header-bar bgColor="bg-white">
			<view slot="content">贝业供应链</view>
		</header-bar>
		<view class="main">

		</view>
	</view>
</template>

<script>
	import store from "../../http/store";
	import {getopenid} from "../../api/test";

	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		onLoad() {

		},
		computed:{
			styleMainHeight(){
				// return "height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2) - " + this.CustomBar + "px)"
				return "height: calc(100vh - " + this.CustomBar + "px)"
			}
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
	.main{
		display: flex;
	}
</style>
