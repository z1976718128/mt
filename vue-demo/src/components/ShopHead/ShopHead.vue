<template>
    <div>
		<div v-for="head in data.shopHead"  :key="head.id">
			<nav class="navbg"  :style="{backgroundImage:`url(${head.navBg})`}" >
			<span @click="$router.back()"><i class="iconfont icon-zuo-copy"></i></span>
			</nav>
			<div class="heads">
				<div class="headImg">
					<img  :src="head.headImg">
				</div>
				<div></div>
				<div class="shopName">
					<h3 @click="showInfo()">{{head.shopNmae}}<i class="iconfont icon-xiangyou2"></i></h3>
					<div>
						<span>评价{{head.evaluation}}</span>
						<span>月售{{head.onSale}}单</span>
						<span>{{head.song}}约{{head.minutes}}分钟</span>
					</div>
				</div>			
				<p class="frist" @click="showPerf()">
					<span class="spanBg">首单</span>
					<span>{{head.preferential[0].knock}}</span>
					<span>{{head.preferential.length}}个优惠<i class="iconfont icon-tubiaozhizuo-"></i></span>
				</p>
				<p class="ement">
					<span>{{head.announcement}}</span>
				</p>
				
			</div>
			<div class="peref" v-show="showPerfs">
				<div class="activity">
					<h3>优惠<i @click="showPerf()" class="iconfont icon-guanbi fr"></i></h3>
					<div>
						<span class="spanBg">首单</span>
						<span>{{head.preferential[0].knock}}</span>
					</div>
					<div>
						<span class="j">满减</span>
						<span>{{head.preferential[1].manj}}</span>
					</div>
					<div>
						<span class="z">折扣</span>
						<span>{{head.preferential[2].zk}}</span>
					</div>
				</div>
				<div class="bg-peref" v-show="showPerfs"></div>
				<div class="bg" v-show="showInfos"></div>
			</div>
			<section class="head-sec" v-show="showInfos">
				<div class="head-mk" v-show="showInfos">
					<h3 >{{head.shopNmae}}<i @click="hideInfo()" class="iconfont icon-guanbi fr"></i></h3>
					<ul class="head-ui">
						<li>
							<h3>{{head.evaluation}}</h3>
							<p>评分</p>
						</li>
						<li>
							<h3>{{head.onSale}}</h3>
							<p>月售</p>
						</li>
						<li>
							<h3>{{head.song}}</h3>
							<p>约{{head.minutes}}分钟</p>
						</li>
						<li>
							<h3>{{head.shipping}}元</h3>
							<p>配送费</p>
						</li>
						<li>
							<h3>{{head.distance}}km</h3>
							<p>距离</p>
						</li>
					</ul>
					<p class="hui">--公告--</p>
					<p>{{head.announcement}}</p>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import {mapState} from "vuex"
export default {
	data () {
		return {
			showInfos:false,
			showPerfs:false
		}
	},
    mounted () {
		this.$store.dispatch("getData");
	},
	computed: {
		...mapState(["data"])
	},
	methods: {
		showInfo(){
			this.showInfos = !this.showInfos;
			console.log(111)
		},
		hideInfo(){
			this.showInfos = !this.showInfos;
		},
		showPerf(){
			this.showPerfs = !this.showPerfs;
		},
		showPerf(){
			this.showPerfs = !this.showPerfs;
		}
	}
}
</script>

<style lang="less" scoped>
nav{
	width: 100%;
	height: 340px;
	overflow: hidden;
	position: relative;
	&::before{
		    content: "";
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
	}
	span{
		position: absolute;
		z-index: 1;
		top: 22px;
		left: 20px;
		i{
			font-size: 25px;
			color: #fff;
		}
	}
}
.navbg{
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 36% -32px;
}
.heads{
	width: 100%;
	position: relative;
	text-align: center;
	.headImg{
		width: 2rem;
		height: 2rem;
		position: absolute;
		top: -212px;
		left: 50%;
		img{
			width: 100%;
			height: 100%;
			border-radius: 16px;
			position: absolute;
			left: -70px;
			top:0;
		}
	}
  .shopName{
	  height: 100%;
	  margin-bottom: 15px;
	  h3{
		  font-size: 30px;
	  }
	  span{
		  font-size: 24px;
	  }
  }
}
.frist{
	margin: 15px 0;
	font-size: 25px;
}
.ement{
		span{
			font-size: .293333rem;
			color: @color;
		}	
}	
.head-sec{
	width: 100%;
	height: 100%;
	background: pink;
	.head-mk{
		width: 80%;
		line-height: 60px;
		background-color: #fff;
		position: absolute;
		left: 11%;
		border-radius: 10px;
		text-align: center;
		z-index: 3;
		.head-ui{
			display: flex;
			li{
				flex: 1;
				h3{
					font-size: 25px;
				}
				p{
					font-size: 22px;
					color:@color;
				}
			}
		}
	}
}
.hui{
	color: @color;
}
.bg{
	position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
	z-index: 2;
}
.bg-peref{
	position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
	z-index: 2;
}
.fr{
	position: absolute;
	right: 40px;
}
.spanBg{
		background-color: rgb(112, 188, 70);
		color: #fff;
}
.j{
	background-color:rgb(240, 115, 115);
}
.z{
	background-color:rgb(240, 115, 150);
}
@color:#999;
.peref{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	text-align: center;
	font-size: 25px;
	z-index: 99;
	.activity{
		position: absolute;
		background-color: #f5f5f5;
		box-shadow: 0 -1px 5px 0 rgba(0,0,0,.4);
		bottom: 0;
		left: -1px;
		right: 0;
		z-index: 100;
		div{
			margin-bottom: .306667rem;
			display: flex;
			align-items: center;
			font-size: 30px;
			margin-left: 40px;
			span:first-child{
				   
			}
			span:last-child{
				padding: 0 25px;
			}
		}
	}
}
</style>



