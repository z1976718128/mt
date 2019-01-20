<template>
    <div>
        <h3>商家推荐</h3>
        <section class="order-s">
            <div class="order">
                <div class="order-item" v-for="order in data.Recom" :key="order.id"> 
                    <p><img :src="order.recomeImg" alt=""></p>
                    <p class="ellipsis">{{order.recomeName}}</p>
                    <p>
                        <span>月售{{order.recomeonSale}}</span>
                        <span>好评率{{order.recomePraise}}</span>
                    </p>
                    <p>
                        <span>￥{{order.recomeMoney}}</span>
                        <span><img src="./img/jia.png" alt=""></span>
                    </p>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    mounted () {
		this.$store.dispatch("getData");
	},
	computed: {
		...mapState(["data"])
	},
}
</script>

<style lang="less" scoped>
h3{
    font-size: 30px;
    margin-left:20px;
}
.order-s{
    width: 100%;
    overflow-x: auto;
    display: flex;
    .order{
        display: flex; 
        height: 8rem;       
        .order-item{
            flex: 1;
            padding: 0 10px;
            p:first-child{
                width: 300px;
                border-radius: 8px;
                margin-bottom: 15px;
                img{
                    width: 100%;

                }
            }
            p:nth-child(2){
                width: 4rem;
                font-size: 30px;
            }
            p:nth-child(3){
                font-size: 25px;
                color: #999;
                margin: 30px 0;
            }
            p:nth-child(4){
                height: 40px;
                span:first-child{
                    font-size: 25px;
                    color: rgb(255, 83, 57);
                }
                span:last-child{
                    margin-left: 160px;
                    img{
                        width: 40px;
                        height: 40px;
                    }
                }
            }
            
        }
    } 
}
</style>





