<template>
    <div class="shopcart">
        <transition name="move">
            <div class="reduce iconfont icon-jian" v-if="order.count" @click="hideReduce"></div>
        </transition>
        <div class="count" v-if="order.count">{{order.count}}</div>
        <div class="add iconfont icon-plus-fill" @click.stop.prevent="showAdd"></div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props:{
        order:Object
    },
    methods: {
        showAdd(){
           if(!this.order.count){
            //    Vue.set(a,b,c)a是要更改的数据,b是数据的第几项,c是更改后的数据
               Vue.set(this.order,"count",1)
           }else{
               this.order.count++;
           }
        },
        hideReduce(){
            if (this.order.count) {
                this.order.count--
            }
        }
    }
}
</script>

<style lang="less" scoped>
.shopcart{
    display: flex;
    .count{
    display: inline-block;
    font-size: 30px;
    padding-top: 8px;
    }

    .iconfont{
        display: inline-block;
        margin: 0 10px;
        font-size: 45px;
        color: rgb(0, 160, 220);
    }
    .move-enter-active,.move-leave-active{
        transition: all .2s linear;
    }
    .move-enter,.move-leave-to{
        opacity: 0;
        transform: translateX(20px) rotate(180deg)
    }
}

</style>
