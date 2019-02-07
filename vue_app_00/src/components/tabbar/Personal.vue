<template>
    <div>
            <div class="wo">
            	<img src="../../img/tx.png" />
            	<p><router-link to="Login">东东</router-link></p>
            </div>
            <ul class="member" v-for='item of list' :key='item.id'>
            	<li>
            		<h2>{{item.money}}</h2>
            		<p>余额</p>
            	</li>
            	<li>
            		<h2>{{item.integral}}</h2>
            		<p>积分</p>
            	</li>
            	<li>
            		<h2>{{item.coupons}}</h2>
            		<p>优惠券</p>
            	</li>
            </ul>
            <ul class="nav">
            	<li>
            		<a href="javascript:;">
            			<img src="../../img/i1.png" />
            			<span>钱包</span>
            		</a>
            	</li>
            	<li>
            		<a href="javascript:;">
            			<img src="../../img/i2.png" />
            			<span>服务地址</span>
            		</a>
            	</li>
            </ul>
            <ul class="nav">
            	<li>
            		<router-link to="opinion">
            			<img src="../../img/i3.png" />
            			<span>意见反馈</span>
            		</router-link>
            	</li>
            	<li>
            		<router-link to="about">
            			<img src="../../img/i4.png" />
            			<span>关于我们</span>
            		</router-link>
            	</li>
            	<li>
            		<a href="javascript:;">
            			<img src="../../img/i5.png" />
            			<span>呼叫客服</span>
            			<em>400-123-456</em>
            		</a>
            	</li>
 
            </ul>
         
    </div>
</template>
<script>
export default {
        data(){
            return {
                list:[],
                pno:0,
                pageSize:1,
                pageCount:1
            }
        },
        methods:{
            getMore(){
                this.pno++;
               var hasMore=this.pno<=this.pageCount
                if(!hasMore){return}
                    
                    //console.log(123);
                    //1.发送请求，获取分页数据
                    var url="newslist?pno="+this.pno+'&pageSize='+this.pageSize;
                    this.$http.get(url).then(//写url这个变量
                        result=>{
                           // console.log(result.body.data);
                        //this.list=result.body.data;
                        var rows = this.list.concat(result.body.data);
                        this.list = rows;
                        this.pageCount=result.body.pageCount
                        }
					)
                   //2.并且显示字模板中
            }
        },
        created(){
            this.getMore();
        }
    }
</script>
<style>
*{margin:0;padding:0;}
ul,li{list-style:none;}
.am-header-title, .am-header-default .am-header-title a{ color: #787a79;}
.wo{ background: #ff2c4c; padding: 20px 0 0 0;}
.wo img{ border-radius: 50px; width: 120px; height: 120px; margin: 0 auto; display: block;}
.wo p{ text-align: center; line-height: 50px;}
.wo p a{ background: #d82640; color: #fff; border-radius: 20px; padding: 5px 20px;}
.member{width: 94%; margin: 10px 3%; overflow: hidden; border-radius: 5px; border:1px solid #ddd; background: #fff;}
.member li{ width: 33%; float: left; border-right: 1px solid #ddd; text-align: center; margin: 10px 0;}
.member li:last-child{ border-right:0;}
.member li h2{ font-weight: normal; color: #ff2c4c;}
.member-list{ background: #fff; margin:1rem 0; border-bottom: 1px solid #ddd; border-top: 1px solid #ddd;}
.member-list li{ border-bottom: 1px solid #ddd; padding: 1rem 0; margin: 0 1rem; overflow: hidden;}
.member-list li span{ color: #000; float: left; margin-left: 2%;}
.member-list .am-icon-angle-right{ float:right;}
.member-list li:last-child{ border-bottom: 0;}
.nav{width: 94%; margin: 10px 3%; border-radius: 5px; border:1px solid #ddd; background: #fff; overflow: hidden;}
.nav li { border-bottom: 1px solid #ddd;padding: 1rem 0;margin: 0 1rem;overflow: hidden;}
.nav li a { display: block; overflow: hidden; line-height: 31px;}
.nav img { width: 30px; height: 31px; float: left;}
.nav li span {color: #000; float: left; margin-left: 2%;}
.nav li .am-icon-angle-right{ float: right;}
.nav li:last-child{ border-bottom: 0;}
.nav li em{ float: right; font-style: normal; color: #666; margin-right: 2%;}
</style>