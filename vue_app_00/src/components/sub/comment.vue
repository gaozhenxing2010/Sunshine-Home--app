<template>
    <div class="app-comment">

        <!--发表评论的区域-->
        <textarea placeholder=" ing吐槽最多120个字" maxlength="120" v-model='msg'>
        
        </textarea>
        <mt-button size="large" @click='postComment()'>发表评论</mt-button>
         <!--评论的区域-->
         <div class="cmt-list"> 
            <div class="cmt-item" v-for='(item,i) of list' :key='item.id'>
                <div class="cmt-info">
                    第{{i+1}}楼：用户名：{{item.user_name}}
                    发表时间:{{item.ctime | datatimeFilter}}
                    <div class="cmt-body">
                        {{item.content}}
                    </div>
                </div>
            </div>
         </div>
         <mt-button size='large' @click='getMore()'>{{load}}</mt-button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        data(){
            return {
                list:[],//当前内容
                pno:0,
                pageSize:7,
                pageCount:1,
                msg:'',//评论内容双向绑定
                load:'加载更多',
                user_name:'匿名'
            }
        }, 
         props:["id"],
        methods:{
            postComment(){
                //console.log(123)
                var msg = this.msg;
                var nid = this.id;
                var user_name = '匿名';
                //console.log(msg+':'+nid+':'+user_name)
                var size = msg.trim().length;
                if(size==0){
                    Toast('评论内容不能为空');
                    return;
                }
                /*var url = 'addComment';
                var obj = {nid:nid,user_name:this.user_name,content:msg};
                this.$http.post(url,obj).then(result=>{
                    var obj = result.body;
                    if(obj.code==1){
                        Toast('评论发表成功');
                        this.pno = 0;
                        this.list = [];
                        this.msg='';
                        this.getMore();
                        
                    }else{
                        Toast('评论发表失败')
                    }
                })*/
                var url = 'http://127.0.0.1:3000/addComment';
                var param = `nid=${nid}&user_name=${this.user_name}&content=${msg}`;
                this.axios.post(url,param).then(result=>{
                    var obj = result.data;
                    if(obj.code==1){
                        Toast('评论发表成功');
                        this.pno = 0;
                        this.list = [];
                        this.msg='';
                        this.getMore();
                        
                    }else{
                        Toast('评论发表失败')
                    }
                })
            },
            getMore(){
                this.pno++;
               var hasMore=this.pno<=this.pageCount
                if(!hasMore){
                    this.load='没有更多内容';
                    return
                }
                    
                    //console.log(123);
                    //1.发送请求，获取分页数据
                    var url="getcomment?nid="+this.id+'&pageSize='+this.pageSize+'&pno='+this.pno;
                    this.$http.get(url).then(//写url这个变量
                        result=>{
                           // console.log(result.body.data);
                        //this.list=result.body.data;
                        var rows = this.list.concat(result.body.data);
                        this.list = rows;
                        this.pageCount=result.body.pageCount;
                        this.user_name=result.body.uname
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
    .app-comment h3{
        font-size:18px;
    }
    .app-comment textarea{
        font-size:14px;
        height:68px;
        margin:0;
    }
    .app-comment .cmt-list{
        margin:5px 0;
    }
    .app-comment .cmt-list .cmt-item{
        border:1px solid #aaa;
        margin-top:15px;
    }
    .app-comment .cmt-list .cmt-info{
        line-height:30px;
        background:#eee;
    }
</style>
