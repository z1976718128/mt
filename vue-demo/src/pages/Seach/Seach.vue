<template>
	<div class="Seach">
		<Heads title="搜索"></Heads>
		<div class="Seach-i">
		 	<el-input  placeholder="请输入内容" v-model="input5" class="input-with-select">
			    <el-select  v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="餐厅名" value="1"></el-option>
			      <el-option label="订单号" value="2"></el-option>
			      <el-option label="用户电话" value="3"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search"></el-button>
			  </el-input>
		</div>
	</div>
</template>

<script>
import Heads from "@/components/Heads/Heads"
export default{
	components:{
		Heads
	},
	data() {
	    return {
	      input3: '',
	      input4: '',
	      input5: '',
	      select: ''
	    }
	  }
}
</script>

<style lang="less">
.Seach{
	text-align: center;
	.Seach-i{
		margin-top: 100px;
	}
	.el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
	}
	.el-input__inner{
		height: 60px !important;
		line-height: 60px !important;
	}
}
.input-with-select,.el-select-dropdown__item{
	font-size: 25px;
}

</style>