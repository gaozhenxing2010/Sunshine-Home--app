<template>
    <div class='app-newsinfo'>
        <h3>{{info.title}}</h3>
        <textarea>
        {{info.content}}
        </textarea>
        <h3>{{info.ctime | datatimeFilter}}</h3>
        <h3>评论 {{info.point}} 人数</h3>
        <comment-box :id='id'></comment-box>
    </div>
</template>
<script>
//引入子组件
import comment from '../sub/comment.vue'
    export default {
        created() {
            //this.id=this.$route.query.id
            this.getNewsInfo()
        },
        data(){
            return {
                id:this.$route.query.id,
                info:{}
            }
        },
        methods:{
            getNewsInfo(){
                var id = this.$route.query.id
                var url="newsinfo?id="+id;
                    this.$http.get(url).then(//写url这个变量
                        result=>{
                            //console.log(result.body)
                            this.info = result.body.data[0];
                        }
                    )
            }
        },
        components:{//注册子组件
            'comment-box':comment
        }
    }
</script>
<style>
    
</style>