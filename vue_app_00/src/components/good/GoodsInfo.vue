<template>
    <div class="app-goodinfo">
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					 <swipe-box :list='list'></swipe-box>
				</div>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-header">商品名称</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class='price'>
                        市场价：<del>2999.00</del>
                        销售价：<span class='now'>2111.00</span>
                    </p>
                    购买数量：
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click='goodSub'>-</button>
                        <input class="mui-input-numbox" type="number" value='1' v-model='val'/>
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click='goodAdd'>+</button>
				    </div>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click='addCart'>加入购物车</mt-button>
            </div>
		</div>
    </div>
</template>
<script>
import swipe from '../sub/swipe.vue'
import {Toast} from 'mint-ui'
    export default {
        created(){
            //console.log(this.$route.params.id),
            this.getInmages()

        },
        data(){
            return {
                nid:this.$route.params.id,
                list:{},
                val:1,
                uid:3
            }
        },
        components:{//注册子组件
            'swipe-box':swipe
        },
        methods:{
            addCart(){
                //var uid=3;
                var url = 'http://127.0.0.1:3000/addCart';
                var param = `pid=${this.nid}&count=${this.val}&uid=${this.uid}`
                this.axios.post(url,param).then(result=>{
                    if(result.data.code==1){
                    Toast(result.data.msg);
                    this.uid=result.data.uid;
                    this.$store.commit('increment',this.val)
                    }else{
                    Toast('添加购物车失败')}
                })
            },
            getInmages(){
                /*var url = 'goodsList';
                this.$http.get(url).then(result=>{
                    this.list = result.body;
                })*/
                var url = 'http://127.0.0.1:3000/imagelist';
                this.axios.get(url).then(result=>{
                    this.list=result.data;
                })
            },
            goodSub(){
                if(this.val>1)
                this.val--;
            },
            goodAdd(){
                if(this.val<1000)
                this.val++;
            }
        }
    }
</script>
<style>
    
</style>