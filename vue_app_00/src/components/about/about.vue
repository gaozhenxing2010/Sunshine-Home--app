<template>
    <div class="app-about">
    <div class="logo">
        <img src="../../img/logo.png" />
    </div>
   <div class="logotext">
        	<h2>啊玉家帮</h2>
        	<p>V1.2.0</p>
        </div>
        <div class="about">
        	<div class="wxdy">
        		<span>微信订阅</span>
        		<em>ayjiabang</em>
        	</div>
        	<div class="wxdy">
        		<span>新浪微博</span>
        		<em>ajyazxl1314@sina.com</em>
        	</div>
        	<div class="wxdy">
        		<span>邮箱</span>
        		<em>1135800463@qq.com</em>
        	</div>
        	<div class="intro">
        		啊玉家帮有限公司是一家致力于打造专业家政服务。包括专业保洁员、家庭保洁、家具清洗、家具养护、洗护服务、生活急救等六大类44项服务...
        	</div>
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
        }
    }
</script>
<style>
.app-about{background:#f5f5f5;}
.logo img{ width: 120px; margin: 20px auto; display: block;}
.logotext{ text-align: center;  color: #999;}
.logotext h2{ font-weight: normal; color: #999;}
.about{width: 94%; margin: 10px 3%; overflow: hidden; border-radius: 5px; border:1px solid #ddd; background: #fff; padding: 8px;}
.wxdy span{ float: left; color: #333; font-size: 16px;}
.wxdy em{ font-style: normal;  float: left; color: #999; margin-left: 10px;}
.wxdy{ line-height: 50px; border-bottom: 1px solid #ddd; overflow: hidden;}
.intro{ line-height: 20px; color: #666; padding: 10px 0;font-size:14px;}
</style>