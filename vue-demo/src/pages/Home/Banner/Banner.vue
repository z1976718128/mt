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
			arr:[
				{id:1,name:"美食",img:"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:2,name:"午餐",img:"https://fuss10.elemecdn.com/c/e9/8b589472823fa97666cef19af644cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:3,name:"商超便利",img:"https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:4,name:"水果",img:"https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:5,name:"医药健康",img:"https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:6,name:"浪漫鲜花",img:"https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:7,name:"厨房生鲜",img:"https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:8,name:"跑腿代购",img:"https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:9,name:"甜品饮品",img:"https://fuss10.elemecdn.com/5/de/bebe83947afee0b0f38257b0e3866jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:10,name:"签到领红包",img:"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:11,name:"签到领红包",img:"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
				{id:12,name:"签到领红包",img:"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},	
			]
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