<template>
    <div class="recom">
        <h2>商家推荐</h2>
        <div class="recom-pso" >
            <div class="recom-item" v-for="item in data.Recom" :key="item.id">
                <img  :src="item.recomeImg" alt="">
                <div class="recomItem-foot">
                    <h3  class="whiet">{{item.recomeName}}</h3>
                    <p><span>月售{{item.recomeonSale}}</span> <span>好评率{{item.recomePraise}}</span></p>
                    <p>￥{{item.recomeMoney}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data () {
        return {
            recom:true
        }
    },
    created () {
        this.$store.dispatch("getData")
    },
    computed: {
        ...mapState(["data"])
    },
}
</script>

<style lang="less" scoped>
.recom{
    width: 100%;
    height: 8.7rem;
    overflow: hidden;
    h2{
        font-size: 35px;
        font-weight: bold;
        margin: 50px 15px;
    }
    .recom-pso{
         height: 9rem;
         display: flex;
         overflow-x: scroll;
         overflow-y: hidden;
         margin: 0 15px;
         .recom-item{
             flex: 1;
             margin: 0 15px;
             span{
                font-size: 20px;
            }
             img{
                 width: 28vw;
             }
         }
    }
    .recomItem-foot{
        width: 100%;
        margin-top: 10px;
        h3{
            font-size: 25px;
            font-weight: bold;

        }
        p:first-of-type{
            font-size: 20px;
            color: @Recomcolor;
            margin: 15px 0; 

        }
        p:last-of-type{
            color: red;
            font-size: .48rem;
            
        }
    }
}
.whiet{
    width:2.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
@Recomcolor:#666;
</style>


