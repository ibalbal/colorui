<template>
	<view class="bg-white">
		<header-bar bgColor="bg-white">
			<view slot="content">
				<text class="text-black text-bold">贝业供应链</text>
			</view>
		</header-bar>
		<main-content is-hand="true">

		</main-content>
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

<style lang="scss">

</style>
