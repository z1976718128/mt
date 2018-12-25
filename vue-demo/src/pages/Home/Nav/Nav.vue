<template>
	<div class="nav" >
		<h2><i class="iconfont icon-xuanxiang"></i>附近商家</h2>
		<div class="nav-s" v-for="item in shop" :key="item.id" @click="$router.push('/shop')">
			<div class="nav-item">
				<img class="nav-img" :src="item.imgs"/>
				<div class="index-main">
					<section class="section-item">
						<h3>
							<i class="iconfont icon-pinpai1"></i>
							<span class="shopTitle">{{item.title}}</span>
						</h3>	
						<span class="rightXin"><i class="iconfont icon-xin"></i></span>
					</section>
					<section  class="section-item">
						<div class="s-grey">
							<div class="s-color" style="width: 82%;"></div>
						</div>
						<span>{{item.pf}}</span>
						<span>{{item.ys}}</span>
						<span class="conton">{{item.fn}}</span>	
					</section>
					<section class="section-item">
						<span>￥{{item.qs}}</span>
						<span>|</span>
						<span>{{item.ps}}</span>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			shop:[
				{id:1,imgs:"https://fuss10.elemecdn.com/a/65/87ded877fd8d2e30dcd349d4f8a06png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				,title:"小马哥卤肉饭(荔园路店)",pf:"3.6",ys:"月售106",fn:'蜂鸟特送',qs:"20起送",ps:"配送费￥3.5"
				},
				{id:2,imgs:"https://fuss10.elemecdn.com/1/c3/1f86595016bac2322cc8808308eeepng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				,title:"福多多煲仔饭(深圳南山店)",pf:"3.6",ys:"月售106",fn:'蜂鸟特送',qs:"20起送",ps:"配送费￥3.5"
				},
				{id:3,imgs:"https://fuss10.elemecdn.com/e/08/878be9d3be47a43fa4aab580c2bebpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				,title:"缪氏川菜（南山店）",pf:"3.6",ys:"月售106",fn:'蜂鸟特送',qs:"20起送",ps:"配送费￥3.5"
				},
				{id:4,imgs:"https://fuss10.elemecdn.com/5/77/b6f85b67416a44424d35099a1c2a9png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				,title:"红星社老长沙米粉小吃(南山店)",pf:"3.6",ys:"月售106",fn:'蜂鸟特送',qs:"20起送",ps:"配送费￥3.5"
				},
				{id:5,imgs:"https://fuss10.elemecdn.com/e/7d/9854d2f95050092a008b4e3ee29e6png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				,title:"尊宝比萨(南头店)",pf:"3.6",ys:"月售106",fn:'蜂鸟特送',qs:"20起送",ps:"配送费￥3.5"
				},
				{id:6,imgs:"https://fuss10.elemecdn.com/4/eb/b0c1fdc0945ffa0e575a3383e135dpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				,title:"必胜客宅急送（金鸡店）",pf:"3.6",ys:"月售106",fn:'蜂鸟特送',qs:"20起送",ps:"配送费￥3.5"
				},
				{id:7,imgs:"https://fuss10.elemecdn.com/c/7f/6076cab3865241f287524d8a1a63cpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				,title:"一虾一刻小龙虾饭·料理",pf:"3.6",ys:"月售106",fn:'蜂鸟特送',qs:"20起送",ps:"配送费￥3.5"
				},
				{id:8,imgs:"https://fuss10.elemecdn.com/f/e4/c375f97fad66f047f172f3ca3360apng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				,title:"老绥元·烧麦(南山店)",pf:"3.6",ys:"月售106",fn:'蜂鸟特送',qs:"20起送",ps:"配送费￥3.5"
				}
			]
		}
	}
}
</script>

<style lang="less" scoped>
.nav{
	width: 100%;
	overflow: hidden;	
	margin-top: 30px;	
	h2{
		padding: 0 20px;
		font-size: 35px;
		color: #666;
		.iconfont{
			font-size: 35px;
			margin: 0 10px;
		}
	}
	.nav-s{
		width: 100%;
		padding:10px;
		border-bottom:1px solid #eee;
	}
	.nav-img{
		float: left;
		width: 150px;
		height: 150px;
		margin-left: 15px;
	}
	.nav-item{
		width: 100%;
	}
	.index-main{
		width: 100%;
  		.section-item{
  			width: 70%;
  			margin-left: 25%;
  			padding: 10px 0;
  			h3{
  				height: 50px;
  				line-height:50px ;
  				display: inline-block;
  				.iconfont{
  					display: inline-block;
  					width: 50px;
  					height: 50px;
  					background: orange;
  					font-size: 50px;
  					vertical-align: middle;
  				}
  				.shopTitle{
  					margin-left: 15px;
  					font-size: 30px;
  					
  				}
  			}
  			.rightXin{
  				float: right;
  			}
  			.s-grey{
  				display: inline-block;
  			    height: 24px;
  			    width: 160px;
  			    background: url(//gss0.bdstatic.com/8r1VfDn7KggZnd_b8IqT0jB-xx1xbK/static/list/img/revision/re-star-grey_c5fed91.png) left top no-repeat;
  			    background-size: 160px 24px;
  			    padding-right: 16px;
  			}
  			.s-color{
  				display: inline-block;
  				height: 24px;
  			    background: url(//gss0.bdstatic.com/8r1VfDn-KggZnd_b8IqT0jB-xx1xbK/static/list/img/revision/re-star-gold_13d50a5.png) left top no-repeat;
  			    background-size: 160px 24px;
  			}
  			.conton{
  				display: inline-block;
  				width: 100px;
  				height: 30px;
  				border-radius: 8px;
  				background-color: skyblue;
  				color: #fff;
				position: absolute;
				right: 15px;
  			}
  			span{
  				font-size: 25px;
  			}
  		}
	}
		
}
	
</style>