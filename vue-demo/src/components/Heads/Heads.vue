<template>
	<div class="head">
		 <slot name="left"></slot>
		 <span class="title">{{title}}</span>			
		 <slot name="right"></slot>	
	</div>
</template>

<script>	
export default{
	props: ["title"],
	data () {
		return {
			sj:""
		}
	},
	created () {
		this.sj = sessionStorage.getItem("user")
	}
	
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
		text-align: center;
	}
</style>