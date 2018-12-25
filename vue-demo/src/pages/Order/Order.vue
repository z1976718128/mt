<template>
	<div class="Order">
		<div class="Order-h">
			<Heads title="订单"/>
		</div>
		<section>
			<img src="//fuss10.elemecdn.com/2/67/64f199059800f254c47e16495442bgif.gif"/>
		</section>
	</div>
</template>

<script>
import Heads from "@/components/Heads/Heads"
export default{
	components:{
		Heads
	}
}
</script>

<style lang="less" scoped>
.Order-h{
	width: 100%;
	text-align: center;
}
section{
	margin-top: 80px;
	min-height:153.666667vw;
	position: relative;
	background: #fff;
	img{
		width: 400px;
		height: 400px;
		position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
	}
}
</style>