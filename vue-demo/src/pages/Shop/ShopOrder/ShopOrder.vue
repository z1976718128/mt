<template>
    <div>
        <ShowShops/>
        <div class="order-men">
            <div class="left" >
                <ul>
                    <li v-for="(menu,index) in data.menu" :key="index" :class="{current:index==currentIndexs}">{{menu.name}}</li>
                </ul>
            </div>
            <div class="right" ref="orderD">
                <ul class="rightUl">
                    <li class="liItem" v-for="(title,index) in data.menu" :key="index"  v-if="title">
                        <h2>{{title.name}}</h2>
                        <ul class="orderUi">
                            <li  v-for="(order,index) in title.foods" :key="index">
                                <span class="ordrImg"><img :src="order.icon" alt=""></span>
                                <section class="content">
                                    <p>{{order.name}}</p>
                                    <p class="">{{order.description}}</p>
                                    <p><span>月售{{order.sellCount}}份</span><span class="right">好评率{{order.rating}}%</span></p>
                                    <p class="red block">￥{{order.price}}</p>
                                    <div class="cart">
                                        <ShopGoods :order="order"/>
                                    </div>
                                </section>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
         <ShopCart/>
    </div>
</template>
<script>
import ShowShops from "@/components/ShowShops/ShowShops"
import {mapState} from "vuex"
import BScroll from "better-scroll"
import ShopGoods from "@/components/ShopGoods/ShopGoods"
import ShopCart from "@/components/ShopCart/ShopCart"
export default {
    data () {
        return {
           scrollY:0,//右侧y轴坐标
           tops:[],//所有右侧li组成的数组
           imgUrl:"http://fuss10.elemecdn.com",
        }
    },
    components:{
        ShowShops,
        ShopGoods,
        ShopCart
    },
    created () {
		this.$store.dispatch("getData",()=>{
            this.$nextTick(()=>{
                this.intscroll();
                this.intTops();

            })
        });
        
    },
    computed: {
        ...mapState(["data"]),
        currentIndexs(){
            const {scrollY,tops} = this;
            const index =this.tops.findIndex((t,index) => {
                // console.log(t)
                return scrollY>=t && scrollY<tops[index+1];
            })
            return index
        }
    },
    methods: {
        intscroll(){
            new BScroll(".left")
                const rightScroll = new BScroll(".right",{
                  probeType:2
              })
              //绑定scroll监听
              rightScroll.on("scroll",({x,y}) =>{
                  //console.log(x,y)
                  this.scrollY =Math.abs(y)
              })
        },
        intTops(){
            const tops =[];
            let top =0;
            const liList =this.$refs.orderD.getElementsByClassName("liItem");
            //伪数组转为真数组
            Array.prototype.slice.call(liList).forEach(i => {
                top+=i.clientHeight;
                tops.push(top)
            });
            this.tops = tops;
            // console.log(tops)
        }
    }
}
</script>

<style lang="less" scoped>
.order-men{
    width: 100%;
    height: 12rem;
    position: relative;
    top: -36px;
    display: flex;
    overflow: hidden;
    .left{
        width: 20%;
        text-align: center;
        background-color:#f5f5f5;
        font-size: 25px;
        flex:0 1 1;
        ul{
            height: 12.5rem;
        }
        li{
            padding:30px 0;
        }
    }
    .right{
        flex: 1;
        background: #fff;
        .orderUi{         
            li{
                display: flex;
                margin:30px 20px;
                .ordrImg{
                    display: inline-block;
                    width: 200px;
                    height: 200px;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 9px;
                    }
                }
                .content{
                    flex: 1;
                    margin-left:15px; 
                    font-size: 25px;
                    p{
                        margin: 20px 0;
                    }
                    .block{
                        display: inline-block;
                    }
                    .cart{
                        display: inline-block;
                        float: right;
                        vertical-align: middle; 
                    }
                    .right{
                        margin-left: 30px;
                    }
                }
            }
        }
    }

}
.current{
    background-color: #fff;
}
</style>