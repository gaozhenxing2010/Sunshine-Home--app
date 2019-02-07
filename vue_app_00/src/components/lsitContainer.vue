<!--src/components/Test.vue-->
<template>
    <div class='app-list'>
        <h1>数据列表</h1>
        <ul>
            <li v-for='item of list' :key='item.uid'>{{item.uid}}-{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[
                    {uid:1,name:'tom'},
                    {uid:2,name:'jerry'},
                    {uid:3,name:'james'}
                ]
            }
        }
    }
</script>
<style >
    
</style>