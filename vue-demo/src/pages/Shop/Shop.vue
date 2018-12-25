<template>
    <div>
        <ShopHead></ShopHead>
        <div class="tab">
            <div class="tab-item"  @click="show=true">
                <router-link  :class="{ation: '/shop/gods'== $route.path}" to="/shop/gods" @click="goTo('/shop/gods')">点餐</router-link>
            </div>
            <div class="tab-item" @click="show=false">
                <router-link :class="{ation: '/shop/comments' == $route.path}"  to="/shop/comments" @click="goTo('/shop/comments')">评价</router-link>
            </div>
            <div class="tab-item" @click="show=false">
                <router-link :class="{ation:'/shop/info' == $route.path}"  to="/shop/info" @click="goTo('/shop/info')">商家</router-link>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
import ShopHead from "@/components/ShopHead/ShopHead"
export default {
    components: {
        ShopHead
    },
    data () {
        return {
            show:true,
        }
    },
    methods: {
      goTo(path){
          this.$router.replace('path')
      }
    }
}
</script>

<style lang="less" scoped>
.ation{
    color: lightseagreen !important;
    border-bottom: 3px solid lightseagreen;
}
.tab{
    width: 100%;
    height: 80px;
    line-height: 80px;
    display: flex;
    text-align: center;
    .tab-item{
        flex: 1;
        a{
            width: 50%;
            height: 100%;
            display: inline-block;
            color: #666 ;
        }   
    }
}
</style>
