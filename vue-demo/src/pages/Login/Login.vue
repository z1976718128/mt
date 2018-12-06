<template>
    <div class="login">
        <router-link to="/Profile">
             <span class="login-back"><i class="iconfont icon-zuo-copy color"></i></span>
        </router-link>
        <div class="login-title">
            <h2>易外卖</h2>
            <div class="login-i">
                <span class="active">短信登录</span>
                <span>密码登录</span>
            </div>
            <form action="#">
                <p class="user"><input v-model="user" type="text" placeholder="手机号"><button class="btn">获取验证码</button></p>
                <p class="pass"><input v-model="passwrod" type="password" placeholder="验证码"></p>
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
               
            </form>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:"",
            passwrod:""
        }
    },
    methods: {
        login(){
            console.log("用户名"+":"+this.user);
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
    .user{
        margin:40px 0;
        position: relative;
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
            right: 88px;
            bottom:30px; 
            color: #ccc;
        }
    }
    .pass{
        input{
            border-radius: 8px;
            width: 600px;
            height: 90px;
            border:1px solid #ddd;
            text-indent: 30px;
        }
    }
    .NewP{
        width: 80%;
        margin-top:24px;
        color: #999;
        font-size: 28px;
        line-height: 40px;
        margin-left: 70px;
        word-wrap: break-word; 
        word-break: normal; 
        .sas{
            color: #2395ff;
        }
    }
    .nc-containew{
        text-align: center;
        button{
            display: block;
            width: 85%;
            height: 84px;
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

}
.active{
    border-bottom: 2px solid lightseagreen;
}
</style>

