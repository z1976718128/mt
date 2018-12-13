<template>
    <div class="login">
        <router-link to="/Profile">
             <span class="login-back"><i class="iconfont icon-zuo-copy color"></i></span>
        </router-link>
        <div class="login-title">
            <h2>易外卖</h2>
            <div class="login-i">
                <span :class="{active:loginTrue}" @click="loginTrue=true">短信登录</span>
                <span :class="{active:!loginTrue}" @click="loginTrue=false">密码登录</span>
            </div>
            <div class="from-s">
                <form action="#">
                    <div>
                        <section :class="{active:loginTrue}"> 
                            <!-- prevent禁止发送表单的默认行为 -->
                            <p class="user">
                                <input v-model="phone" type="text" placeholder="手机号" maxlength="11">
                                <button class="btn" :disabled="!getUser" :class="{userColor:getUser}" @click.prevent="getCode">
                                    {{contTime>0?`已发送(${contTime}s)`:`获取验证码`}}
                                </button>
                            </p>
                            <p class="pass"><input v-model="code"  type="password" placeholder="验证码"></p>
                        </section>
                            <p class="NewP">
                                新用户登录即自动注册，并表示已同意
                                <router-link to="" class="sas">
                                    《用户服务协议》
                                </router-link>
                            </p>
                            <div class="nc-containew">
                                <button @click="login()">登录</button>
                                <h3>关于我们</h3>
                            </div>
                    </div>
                    <div class="fast" >
                        <section :class="{active:!loginTrue}">
                            <p class="user"><input v-model="name"  type="text" placeholder="手机号/邮箱/用户名"></p>
                            <section class="pass">
                                <input v-model="passwrod" type="text" placeholder="密码" v-if="showPass">
                                <input v-model="passwrod" type="password" placeholder="密码" v-else>
                                <div class="switch_button" :class="showPass?'on':'off'" @click="showPassd()">
                                    <div class="switch-circle" :class="{rightx:showPass}"></div>
                                    <span class="switch-text">{{showPass?"on":'off'}}</span>
                                </div>
                            </section>                        
                            <p class="pass"><input v-model="captcha" type="password" placeholder="图形验证码"></p>
                        </section>
                    </div>               
                </form>
            </div>
        </div>
        <Alert :aleTxt="showTxt" v-show="showAlert" @change="change"/>
    </div>
</template>
<script>
import Alert from "@/components/Alert/Alert"
export default {
    components: {
        Alert
    },
    data(){
        return{
            phone:"", //手机号
            passwrod:"",//密码
            contTime:0,//定时器
            showPass:false,//显示密码
            loginTrue:"",//
            code:"",
            name:"",
            captcha:"",
            showTxt:"",//提示文本
            showAlert:false, //是否显示弹出框

        }
    },
    methods: {
        //通用方法抽离
        altShow(showTxt){
            this.showAlert =true;
            this.showTxt =showTxt;
        },
        login(){
            //表单验证
            if(this.loginTrue){
                const {showPassd,phone,code} =this;
                if(this.phone == ""){
                    this.altShow("请输入手机号");
                }
                else if (!/^1[3|5|8][0-9]\d{8}$/.test(this.phone)) {
                    this.altShow("手机号不正确");
                }else if(!/^\d{6}$/.test(code)){
                    this.altShow("验证码不正确");
                }
            }else{
                const {name,passwrod,captcha} =this;
                if(this.name ==""){
                    this.altShow("请输入手机号/邮箱/用户名");
                }else if(!this.name){
                    this.altShow("密码不正确");
                }else if(!/^\d{6}$/.test(captcha)){
                    this.altShow("图形验证码不正确");
                }
            }
        },
        getCode(){  
            if(!this.contTime){
                 //启动倒计时
                this.contTime=30;
                const time = setInterval(() => {
                    this.contTime--;
                    if(this.contTime<=0){
                        clearInterval(time);
                    }
                }, 1000);
                //发送请求(向手机发送验证码)
            }
        },
        showPassd(){
            this.showPass = !this.showPass;
        },
        change(){
            this.showTxt="";
            this.showAlert=false;
        }
    },
    computed: {
        getUser(){
          return /^1[3|5|8][0-9]\d{8}$/.test(this.phone);
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    background-color: #fff;
    .login-back{
        display: inline-block;
        padding: 30px
    }
}
.color{
    color: #666;
    font-size: 40px;
}
.login-title{
    width: 100%;
    text-align: center;
    margin-top: 25px;
    h2{
        font-size: 60px;
        color:lightseagreen;
        margin-bottom: 40px;
    }
    .login-i{
        width: 100%;
        text-align:center;
        span{
            font-size: 30px;
            margin:0 0.5rem;
        }
    }
    .from-s{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .user{
        width: 8rem;
        height: 1.2rem;
        margin:40px 0;
        position: relative;
        margin: 40px auto;

        input{
            border-radius: 8px;
            width: 600px;
            height: 90px;
            border:1px solid #ddd;
            text-indent: 30px;
        }
        .btn{
            border: none;
            background: none;
            outline: none;
            position: absolute;
            right: 0;
            bottom:30px; 
            color: #ccc;
            &.userColor{
                color: #666;
            }
        }
    }
    .pass{
        width: 8rem;
        height: 1.2rem;
        margin-bottom: 40px;
        position: relative;
        margin: 40px auto;
        input{
            border-radius: 8px;
            width: 600px;
            height: 90px;
            border:1px solid #ddd;
            text-indent: 30px;
        }
    }
    .NewP{
        width: 8rem;
        margin-top:24px;
        color: #999;
        font-size: 28px;
        line-height: 40px;
        margin-left: 70px;
        word-wrap: break-word; 
        word-break: normal; 
        margin: 0 auto;
        .sas{
            color: #2395ff;
        }
    }
    .nc-containew{
        text-align: center;
        button{
            display: block;
            width: 8rem;
            height: 1.2rem;
            border-radius: 8px;
            background: #4cd96f;
            color: #fff;
            cursor: pointer;
            text-align: center;
            font-size: 32px;
            line-height: 84px;
            border: none;
            outline: none;
            margin: 60px auto;
        }
        h3{
            font-size: 30px;
            color: #666;
        }
    }
    .fast{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
    }

}
.active{
    visibility: visible;
    border-bottom: 2px solid lightseagreen;
}
section{
    border-bottom: none !important;
}
.switch_button{
    width: 90px;
    height: 40px;
    background-color: #fff;
    position: absolute;
    top: 26px;
    right: 0;
    border-radius: 20px;
    border: 1px solid #666;
}
.switch-circle{
    width: 40px;
    height: 40px;
    background-color:#fff;
    border-radius: 50%;
    border: 1px solid #ccc;

}
.switch-text{
    position: absolute;
    top: 8px;
    left: 4px;
}
.rightx{
    transform: translateX(50px);
}
.off{
    color: pink;
}
</style>

