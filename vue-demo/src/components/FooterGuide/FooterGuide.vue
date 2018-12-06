<template>
	<div class="foot">
		<div class="foot-item" :class="{on:'/home'==$route.path}" @click="goTo('/home')">
			<span class="item-icon">
				<i class="iconfont icon-U"></i><br />
			</span>
			<span>首页</span>
		</div>
		<div class="foot-item" :class="{on:'/seach'==$route.path}" @click="goTo('/seach')">
			<span class="item-icon">
				<i class="iconfont icon-sousuo"></i><br />
			</span>
			<span>搜索</span>
		</div>
		<div class="foot-item" :class="{on:'/order'==$route.path}" @click="goTo('/order')">
			<span class="item-icon">
				<i class="iconfont icon-icon-"></i><br />
			</span>
			<span>订单</span>
		</div>
		<div class="foot-item" :class="{on:'/profile'==$route.path}" @click="goTo('/profile')">
			<span class="item-icon">
				<i class="iconfont icon-seeusero"></i><br />
			</span>
			<span>我的</span>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goTo(path){
				this.$router.replace(path)
				
			}
		}
	}
</script>

<style lang="less">
		.foot{
			width: 100%;
			height: 100px;
			background: #fff;
			position: fixed;
			bottom: 0;
			border: 1px solid #eee;
			display: flex;
			text-align: center;
			.foot-item{
				flex: 1;
				
				.item-icon{
					position:relative;
					margin-top: 10px;
					top: 8px;
					.iconfont{
						font-size: 40px;
					}
				}
				span:last-child{
					position: relative;
					bottom: -20px;
					font-size: 30px;
				}
			}
		}
		.on{
			color: #02a774;
		}
</style>