<template>
    <div>
        <div class="footers">
            <span class="imgLogos"></span>
            <div class="ifos">
                <p><span>为选购商品</span></p>
                <p><span>另需配送费4元</span></p>
            </div>
            <router-link class="shopTo" to="/Profile">￥10元起送</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.footers{
    width: 100%;
    line-height: 130px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #505052;
    position: relative;
    .imgLogos{
        position: absolute;
        top: -24px;
        left: 20px;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 100%;
        border: .13rem solid #444;
        background-image: radial-gradient(circle,#363636 .6rem,#444 0);
        &::before{
            position: absolute;
            top: 24px;
            right: 0;
            bottom: 0;
            left: 24px;
            background: url("./img/gouwuche.png")no-repeat;
            content: "";
            background-size: .6rem;
        }
    }
    .ifos{
        display: inline-block;
        line-height: normal;
        margin-left: 200px;
        p{
            font-size: 25px;
            color: #999;
        }
    }
    .shopTo{   
        display:inline-block;
        width: 2.8rem;
        height: 100%;
        float: right;
        background-color:#535356; 
        text-align: center;
        font-size: 25px;
    }
    
}
</style>


