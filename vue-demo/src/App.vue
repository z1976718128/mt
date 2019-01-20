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
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app 
	width 100%
	height 100%
a{
	color: #fff;
  text-decoration none;
}
  
</style>
