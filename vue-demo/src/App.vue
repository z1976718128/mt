<template>
  <div id="app">
    <FooterGuide v-show="$route.meta.showFoot"></FooterGuide>
    <router-view/>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide"	
export default {
  components:{
  	FooterGuide
  },
  mounted () {
    this.$router.push("/home")
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app 
	width 100%
	height 100%
	background #f5f5f5
	overflow: hidden;
		
a{
	color: #fff;
  text-decoration none;
}
body{
	
}
</style>
