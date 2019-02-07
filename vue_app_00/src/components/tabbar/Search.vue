<template>
    <div class="app-search">
        <div class="mui-card">
			<div class="mui-card-header">
                <input type="text" name='keyword' value='' v-model='keyword' placeholder='关键字'/>
            </div>
			<div class="mui-card-header">
                <input type="number" name='low' value='' v-model='low' placeholder='上限'/>
            </div>
			<div class="mui-card-header">
                <input type="number" name='high' value='' v-model='high' placeholder='下限'/>
            </div>
			<div class="mui-card-header">
                <mt-button @click='handleSearch' type='danger'>搜索</mt-button>
            </div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for='item of list' :key='item.lid'>
                            <a href="javascript:;">
                                <div class="mui-media-body">
                                    {{item.lname}}
                                    <p class='mui-ellipsis'>{{item.price}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
				</div>
			</div>
			<div class="mui-card-footer"></div>
		</div>
    </div>
</template>
<script>
    export default {
        created(){
            
        },
        data(){
            return {
               keyword:'',
               low:'',
               high:'',
               list:[]
            }
            
        },
        methods:{
            handleSearch(){
                var keyword=this.keyword;
                var low=this.low;
                var high=this.high;
                if(low == ''){
                    low=0
                };
                if(high == ''){
                    high = 2100000000;
                };
                var url = 'http://127.0.0.1:3000/search?keyword='+keyword+'&low='+low+'&high='+high;
                this.axios.get(url).then(result=>{
                    this.list = result.data.data
                })
            }
        }
    }
</script>
<style>

</style>