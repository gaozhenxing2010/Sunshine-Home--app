<template>
    <div class="app-newList">
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item of list' :key='item.id'>
					<router-link :to="'/NewsInfo?id='+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                               <span>{{item.ctime | datatimeFilter}}</span>
                               <span>价格：{{item.pc}}元</span>
                                <span>下单：{{item.point}}次</span>
                            </p>
     
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
</style>
