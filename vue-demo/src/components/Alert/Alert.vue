<template>
    <div class="box">
         <div class="alet">
             <section>
                 <img src="../../pages/Login/img/jinggao.png"/>
                 <p class="ctp">{{aleTxt}}</p>
             </section>
             <p class="ltp" @click="clotip()">确认</p>
         </div>
    </div>
</template>
<script>
export default {
    props: ["aleTxt"],
    methods: {
        clotip(){
            this.$emit("change");
        }
    }
}
</script>

<style lang="less" scoped>
.box{
    width: 100%;
    height: 100%;
}
.alet{
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -200px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #666;
    img{
        width: 150px;
        height: 150px;
    }
    section{
        width: 100%;
        background: #fff;
        .ctp{
            width: 100%;
            margin: 20px 0;
            font-size: 30px
        }
    }
    .ltp{
        width: 100%;
        background: #4cd96f;
        line-height: 100px;
        font-size: 30px;
        color: #fff;

    }
}
</style>



