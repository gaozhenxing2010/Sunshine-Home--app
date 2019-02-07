<template>
    <div class="app-cart">
     <!--商品列表-->
        <div class="mui-card">
			<div class="mui-card-header">家电清洗</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for='item of list' :key='item.iid'>
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="">
                                <div class="mui-media-body">
                                    {{item.lname}}
                                    <p class='mui-ellipsis'>
                                        <span class="price">价格：{{item.price}}元/小时 </span>
                                        <span class="count">
                                            <div class="mui-numbox">
                                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click='cartSub' :data-iid='item.iid'>-</button>
                                                <input class="mui-input-numbox" type="number" :value="item.count"/>
                                                <button class="mui-btn mui-btn-numbox-plus" type="button" @click='cartAdd' :data-iid='item.iid'>+</button>
                                            </div> 
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
					</ul>	
				</div>
			</div>
			<div class="mui-card-footer">合计：{{getSubTotal}}元</div>
            <router-link to='/Home'><button class="order">再次确认</button></router-link>
		</div>
            
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                
                    list:[]
                
            }
        },
        methods:{
            updateCart(iid,count) {
                var url = 'http://127.0.0.1:3000/updateCart?iid='+iid+'&count='+count;
                this.axios.get(url).then(result=>{
                   if(result.data.code == 1){
                       Toast(result.data.msg)
                   }else{
                       Toast(result.data.msg)
                   }
                })
            },
            cartSub(e){
                var iid = e.target.dataset.iid;
                //1.创建循环list
                for(var item of this.list){
                    //判断当前元素是否是iid；
                    if(item.iid == iid && item.count > 1){
                        //当前数据减一
                        item.count--;
                        this.updateCart(iid,item.count)
                        //跳出循环
                        break;
                    }
                }
            },
            cartAdd(e){
                var iid = e.target.dataset.iid;
                for(var item of this.list){
                    //判断当前元素是否是iid;
                    if(item.iid == iid && item.count < 999){
                        //当前数据减一
                        item.count++;
                        this.updateCart(iid,item.count)
                        //跳出循环
                        break;
                    }
                }
            },
            getMore(){
                var url = 'http://127.0.0.1:3000/getCarts?uid=2'
                this.axios.get(url).then(result=>{
                    this.list=result.data.data
                })
            }
        },
        created() {
            this.getMore();
        },
        computed:{
                getSubTotal:function(){
                    var sum=0;
                    for(var item of this.list){

                        sum+=item.count * item.price;
                        return sum
                }
            }
        }
    }
    

</script>
<style>
.mui-card{position:relative;}
    .order{position:absolute;top:158px;right:6px;background:#ff2c4c;color:#fff;}
</style>