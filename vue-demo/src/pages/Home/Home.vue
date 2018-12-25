<template>
	<div class="Home">
		<Heads title="深圳宝安动物公园">
			 <router-link to="./seach"  slot="left">
				 <span class="left"><i class="iconfont icon-sousuo"></i></span>			 			
			 </router-link>
			 <router-link to="./login" slot="right">
				<span class="right" >
					<img v-if="this.sj || this.pas" class="rImg" src="./img/yonghu.png" alt="">
					<span class="right" v-else >登录</span>
				</span>  
			 </router-link>
		</Heads>
		<Banner :paginationShow="true" :autoplay="5000"  paginationPositon="right"></Banner>
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
	},
	data () {
		return {
			sj:"",
			pas:""
		}
	},
	created () {
		this.sj = sessionStorage.getItem("user")	
		this.pas = sessionStorage.getItem("name")
	}
}
</script>

<style lang="less">
.left{
	float: left;
	margin-left: 10px;
}
.right{
	float: right;
	img{
		width: 40px;
		height: 40px;
		margin-right: 10px;

	}
}
</style>
