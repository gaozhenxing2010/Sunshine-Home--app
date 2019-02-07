<template>
    <div class='app-home'>
        
            <mt-swipe :auto='2000'>
                <mt-swipe-item v-for='item of list':key='item.lid'>
                    <img :src="item.img_url"/>
            </mt-swipe-item>
            </mt-swipe>
            <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/NewsList'>
		                    <img src="../../img/icon1.png" />
		                    <div class="mui-media-body">家电维修</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/NewsList'>
		                    <img src="../../img/icon2.png" />
		                    <div class="mui-media-body">家电清洗</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/NewsList'>
		                    <img src="../../img/icon3.png" />
		                    <div class="mui-media-body">卫生清理</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/NewsList'>
		                    <img src="../../img/icon4.png" />
		                    <div class="mui-media-body">开锁/换锁</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/NewsList'>
		                    <img src="../../img/icon5.png" />
		                    <div class="mui-media-body">疏通</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/NewsList'>
		                    <img src="../../img/icon6.png" />
		                    <div class="mui-media-body">水电安装</div></router-link></li>
		    </ul> 
            <div class="reg">
                <router-link to='/Login'>
                    <img src="../../img/reg.png" alt="">
                </router-link>
            </div>
            <div class="brand">
                <router-link to='about'>
                    <div class="brand-left">
                        <i class="am-icon-user-plus"></i>
                        <div class="text">
                        <h2>加盟我们</h2>
                        <p>共创大业、共享双赢</p>
                        </div>
                    </div>
                </router-link>
                <router-link to='opinion'>
                    <div class="brand-right">
                    <i class="am-icon-edit"></i>
                        <div class="text">
                        <h2>意见反馈</h2>
                        <p>让我们变得更好</p>
                        </div>
                    </div>
                </router-link>
            </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.getImaegs()
        },
        methods:{
            getImaegs(){
                this.$http.get('imagelist').then(
                    result=>{
                        this.list = result.body;
                    }
                )
            }
        },
        data(){
            return {
                list:[]
            }
        }
    }
</script>
<style>
    .app-home .mint-swipe{
        height:175px
    }
    .app-home .mint-swipe img{
        width:100%
    }
    .app-home .mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn){
    margin: 0;
    padding: 0px 0;}
    .app-home>ul{border-radius:8px;}
    .app-home .mui-table-view.mui-grid-view img{
        height:50px;
    }
    .app-home .mui-table-view.mui-grid-view{
        background-color:#fff;
    }
    .app-home .mui-table-view.mui-grid-view li{
        border:0;
    }
    .reg{margin-top:10px;}
    .reg a img{width:100%;}
    .brand {
    width: 100%;
    overflow: hidden;
    margin-top:6px;
    border-radius: 8px;
    border: 1px solid #ddd;
    background: #fff;
}
.brand-left {
    width: 50%;
    float: left;
    padding: 5px;
}
.brand-left .text h2 {
    font-weight: normal;
    font-size: 15px;
    color: #333;
}
.brand-left .text {
    float: left;
}
.brand-right {
    width: 50%;
    float: left;
    border-left: 1px solid #ddd;
    padding: 5px;
}
.brand-right .text {
    float: left;
}
.brand-right .text h2 {
    font-weight: normal;
    font-size: 15px;
    color: #333;
}
</style>