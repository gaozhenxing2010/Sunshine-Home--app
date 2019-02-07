<template>
    <div class='app-login'>
        <div class="mui-card">
            <div class="logo">
             <img src="../../img/logo.png" alt="">
             </div>
			<div class="mui-card-header">
                <h3>用户登录</h3>
            </div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!--form action="#"-->
                        用户名：<input type="text" value='' placeholder='请输入用户名' v-model='uname'/>
                        密码: <input type="password" value='' placeholder='请输入密码' v-model='upwd'>
                        <mt-button size='large' @click='handleLogin' type='danger'>登录</mt-button>
                    <!--/form-->
				</div>
			</div>
			<div class="mui-card-footer">注册</div>
		</div>
    </div>
</template>
<script>
import  {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                uname:'',
                upwd:''
            }
        },
        methods:{
            handleLogin(){
               /* var url= 'Login?uname='+u;
                url+='&upwd='+p;
                this.$http.get(url).then(result=>{
                    var obj = result.body;
                    if(obj.code == -1){
                        Toast(obj.msg);
                    }else{
                        this.$router.push('/Home')
                    }
                });*/
                var url = 'http://127.0.0.1:3000/login';
                var param = `uname=${this.uname}&upwd=${this.upwd}`
                this.axios.post(url,param).then(result=>{
                    var obj = result.data;
                    if(obj.code == -1){
                        Toast(obj.msg);
                    }else{
                        this.$router.push('/Home')
                    }
                })
            }
        }
    }
</script>
<style>
.mui-card-header h3{text-align:center;}
.logo{background:#f5f5f5;}
    .logo img{display:block; width:120px;margin:0 auto;}
</style>