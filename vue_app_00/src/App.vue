<template>
 <div class="app-container">
 <mt-header fixed title='阿玉家帮'></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab" >
                <router-link class="mui-tab-item"  to="/Home" >
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                
                <router-link class="mui-tab-item " to='/Cart' >
                    <span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
                    <span class="mui-tab-label">订单管理</span>
                </router-link>
               <!-- <router-link class="mui-tab-item" to='/Search'>
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>-->
                <router-link class="mui-tab-item"  to="/Personal" >
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">个人中心</span>
                </router-link>
		</nav>
 </div>
</template>

<style>
.mint-header{background:#fff!important;}
.mint-header-title{font-size:20px!important;}
.mint-header-title{color:#787a79;}
   .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
