<template>
	<div class="Home">
		<Heads rightTxt="登录注册" centTxt="昌平区北七家宏福路" ></Heads>
		<Banner :paginationShow="true" paginationPositon="center" ></Banner>
		<Nav></Nav>
	</div>
</template>

<script>
import Heads from "@/components/Heads/Heads"
import Banner from "@/pages/Home/Banner/Banner"
import Nav from "@/pages/Home/Nav/Nav"
export default{
	components:{
		Heads,
		Banner,
		Nav
	}
}
</script>

<style>
</style>