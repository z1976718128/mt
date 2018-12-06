<template>
	<div class="head">
			<slot>
				<span><i class="iconfont icon-sousuo"></i></span>
			</slot>
			<router-link to="/login">
				<span class="rightSpan">{{rightTxt}}</span>			
			</router-link>
			<span class="cent">{{centTxt}}</span>						
			<span class="newtitle">{{title}}</span>	
			<span class="newtitle">{{ord}}</span>						
			<span class="newtitle">{{pro}}</span>						
	</div>
</template>

<script>	
export default{
	props:["centTxt","rightTxt","title","ord","pro"]
	
}
</script>

<style lang="less">
	.head{
		width: 100%;
		height: 80px;
		line-height: 80px;
		position: fixed;
		top: 0;
		background-color: lightseagreen;
		font-size: 30px;
		z-index: 2;
		color: #fff;
		.rightSpan{
			float: right;
			margin-right: 10px;
		}
		.cent{
			position: absolute;
			left: 35%;
		}
		span:first-child{
			margin-left: 10px;
			.iconfont{
				font-size:40px !important;			
			}
		}
		.newtitle{
			text-align: center;
		}
	}
</style>