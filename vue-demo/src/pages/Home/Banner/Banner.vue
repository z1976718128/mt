<template>
	<div class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide ">						
							<div class="contai banner-item" v-for="item in arr" :key="item.id">
								<router-link to="/home">
									<img :src="item.img"><br/>
									<span>{{item.name}}</span>
								</router-link>
							</div>
					</div>
					
				</div>
				<!-- 分页器 -->
		  		<div :style="{'text-align':paginationPositon}" :class="{'swiper-pagination':paginationShow}"></div>	
			</div>
	</div>
</template>

<script>
import Swiper from "swiper";
export default{
	data(){
		return{
			
		}
	},
	props:{
			paginationShow:{
				type:Boolean,
				default:true
			},
			paginationPositon:{
				type:String,
				default:"center"
			},
			loop:{
				type:Boolean,
				default:true
			},
		},
	mounted(){
		new Swiper(".swiper-container",{
			loop:this.loop,
			pagination:".swiper-pagination",
		})
	},
	computed:{
		arr(){
			return this.$store.state.arr;
		}
	}
}
</script>

<style scoped lang="less">
@import "swiper/dist/css/swiper.min.css";
.banner{
	width: 100%;
	height: 5rem;
	margin-top:1rem;
	.banner-item{
	  width: 25%;
	  float: left;
	  text-align: center;
	}
	.contai{
		text-align: center;
		img{
			width: 90px;
			height: 90px;
		}
		.tiel{
			font-size: 30px;
		}
	}
	span{
		color: #666;
	}
}
.swiper-container {
    height: 5.5rem;
} 
</style>