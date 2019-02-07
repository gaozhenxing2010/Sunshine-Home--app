<template>
    <div class="app-newList">
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item of list' :key='item.id'>
					<router-link :to="'/NewsInfo?id='+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}<span></span>
                            <em>￥{{item.pc}}</em>
							<!--<p class='mui-ellipsis'>
                                <span>工龄:{{}}</span>
                               <span>价格：</span>
                               <button class="danger">确认下单</button>
                                <span>下单：次</span>
                            </p>-->
                            <p>工龄：{{item.point}}年</p>
                            <p>距离：{{item.pis}}km</p>
                            <router-link to='/Cart'> <button class="true" @click="">确认下单</button></router-link>
						</div>  
					</router-link>
				</li>
    </ul>
    <mt-button type='primary' size='large' @click='getMore()'>加载更多</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[],
                pno:0,
                pageSize:7,
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
 .app-newList .mui-table-view .mui-ellipsis {
        display:flex;
        font-size:12px;
        color:#226aff;
        justify-content:space-between;
    }
    .mui-media-body{overflow:hidden;position:relative;}
    .mui-media-body em{float:right;color:red;font-size:20px;}
    .number{float:right;}
    .true{background: #ff2c4c;  color: #fff; border-radius: 5px; line-height: 35px; padding: 0 6px; position: absolute; right: 1px; bottom: 2px; border: 0;}
</style>
