<template>
	<div class="profile">
		<div class="profile-h">
			<Heads title="我的"></Heads>
		</div>
		<section class="section-body">
			<router-link to="/login">
				<span class="user"><i class="iconfont icon-seeusero"></i></span>
			</router-link>
			<router-link to="/login">
				<span class="login" v-if="!this.sj">{{this.pas || "登录/注册"}}</span>
				<span class="login" v-else><i class="iconfont icon-shouji1"></i>{{this.sj || "登录/注册"}}</span>
			</router-link>
			<router-link to="/login">
				<span class="sPright"><i class="iconfont icon-you"></i></span>
				<p class="iphone"><i v-if="!this.sj" class="iconfont icon-shouji1"></i>{{this.sj?this.sow:"暂无绑定手机号"}}</p>
			</router-link>
		</section>
		<div class="money">
			<div class="money-noe">
				<h2 class="org">0.00元</h2>
				<h3>我的余额</h3>	
			</div>
			<div class="money-noe">
				<h2 class="red">0个</h2>
				<h3>我的优惠</h3>	
			</div>
			<div class="money-noe">
				<h2 class="green">0分</h2>
				<h3>我的积分</h3>	
			</div>
		</div>
		<div class="footer-d">
			<div class="footer-s"><img src="./img/msnui-pos.png" alt=""><span>我的订单</span><i class="iconfont icon-you"></i></div>
			<div class="footer-s"><img src="./img/shangcheng.png" alt=""><span>积分商城</span><i class="iconfont icon-you"></i></div>
			<div class="footer-s"><img src="./img/liwu.png" alt=""><span>美团外卖卡</span><i class="iconfont icon-you"></i></div>
			<div class="footer-s"><img src="./img/kefu.png" alt=""><span>美团外卖卡</span><i class="iconfont icon-you"></i></div>
			<div class="footer-s"><img src="./img/xiazaieliaomaapp.png" alt=""><span>服务中心</span><i class="iconfont icon-you"></i></div>
		</div>
		<div class="foots" v-if="this.sj || this.pas" @click="mint">
			<mt-button type="danger" width="100%">
				退出登陆
			</mt-button>
		</div>
	</div>
</template>

<script>
import {mapMutations} from "vuex"
import { MessageBox,Toast } from 'mint-ui';
import Heads from "@/components/Heads/Heads"
export default{
	data () {
		return {
			sj:"",
			pas:"",
			sow:"",
		}
	},
	components:{
		Heads
	},
	created () {
		this.sj = sessionStorage.getItem("user")	
		this.pas = sessionStorage.getItem("name")	
	},
	methods: {
		mint(){
			MessageBox.confirm('确定退出登陆?').then(
			//确定	
			action => {
				sessionStorage.removeItem("user")
				sessionStorage.removeItem("name")
				this.$router.replace("./login")
				Toast("退出成功")
			},
			//取消
			action => {
				console.log("no")
			}
			);
		}	
	}
}
</script>

<style lang="less" >
.profile-h{
	width: 100%;
	text-align: center;
	border: 1px solid #fff;
	
}
.section-body{
	width: 100%;
	height: 200px;
	margin-top: 80px;
	position: relative;
	background-color: lightseagreen;
	border-top: 1px solid #fff;
	.user{
		display: inline-block;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: saddlebrown;
		text-align: center;
		line-height: 200px;
		.iconfont{
			font-size: 100px;
			color: #fff;
		}
	}
	.login{
		position: absolute;
		left: 220px;
		top: 40px;
		font-size: 30px;
		color: #fff;
	}
	.sPright{
		position: absolute;
		right: 15px;
		bottom: 100px;
		i{
			color: #fff;
		}

	}
	.iphone{
		position: absolute;
		left: 214px;	
		top: 120px;
		display: inline-block;
		color: #fff;	
		font-size: 30px;
	}
	
}
.money{
		width: 100%;
		height: 200px;
		display: flex;
		text-align: center;
		background-color: #fff;
		border-bottom: 1px solid #999;
		.money-noe:nth-child(2){
			border-left:1px solid #999 ;
			border-right:1px solid #999 ;
		}
		.money-noe{
			height: 100%;
			flex: 1;
			.org,.red,.green{
				font-size: 0.6rem;
				margin-top: 50px;	
			}
			h3{
				margin-top: 20px;
				color: #666;
			}
		}
	}
	.org{
		color: orange;
	}
	.red{
		color: salmon;
	}
	.green{
		color: green;
	}
	.footer-d{
		width: 100%;
		background-color: #fff;
		.footer-s{
			flex: 1;
			height: 100px;
			line-height: 100px;
			border-bottom: 1px solid #eee;
			img{
				width: 60px;
				height: 60px;
				vertical-align: middle;
				margin:0 30px;
			}
			span{
				font-size: 30px;
				vertical-align: middle;
			}
			i{
				font-size: 16px;
				float: right;
				vertical-align: middle;
				color: #bbb;
				margin-right:20px; 
			}
		}
	}
.foots{
	width: 100%;
	height: 90px;
	button{
		width: 100%;
		height: 100%;
		font-size: 25px;
	}
}	
.mint-msgbox,.mint-msgbox-title,.mint-msgbox-message,.mint-msgbox-wrapper{
	font-size: 30px !important;
}
.mint-msgbox-btns{
	height: 0.9rem;
}
</style>