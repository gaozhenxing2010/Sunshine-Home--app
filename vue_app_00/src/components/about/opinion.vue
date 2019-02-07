<template>
    <div class="app-opinion">
        <input class="ts" placeholder="请输入反馈内容">
        <mt-button size='large' type="danger">提交</mt-button>
    </div>
</template>
<script>
import  {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                uname:'',
                upwd:''
            }
        }
    }
</script>
<style>
.app-oponion{background:#f5f5f5;}
.ts{ padding: 1rem; border: 1px solid #ddd; margin: 1rem 3%; width: 94%; height: 150px; border-radius: 5px;}
</style>