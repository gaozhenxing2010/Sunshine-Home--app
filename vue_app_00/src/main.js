import Vue from 'vue'
import App from './App.vue'
import router from './router'


import'mint-ui/lib/style.css'


Vue.config.productionTip = false
//5: 设置请求的根路径 




// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//引入Vuex
import Vuex from 'vuex'
//注册Vuex
Vue.use(Vuex)
//创建实例对象
var store = new Vuex.Store({
    state:{
        cartCount:0 //购物车商品数量
    },
    mutations: {
        increment(state,count){
            state.cartCount+=parseInt(count)
        },
        substact(state){},
        chear(state){}
    },
    getters:{
      optCartCount:function(state){
        return state.cartCount;
      }
    }
})

//1.引入组件
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
//2.注册组件
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
//3.注册组件-轮播
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//引入vue-resource库
import axios from 'axios'
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
import VueResource from "vue-resource";
//5.注册vue-resource库
Vue.use(VueResource)
//6.1设置根目录
Vue.http.options.root = "http://127.0.0.1:3000/";
//6.2:全局设置post 时候表单的数据组织格式为 
//application/x-www-form-urlencoded
//将提交的数据进行转码操作
Vue.http.options.emulateJSON = true;
Vue.http.options.withCredentials = true;
//7.创建日期类型过滤器
//val:原先日期对象
Vue.filter('datatimeFilter',function(val){
//7.1创建日期对象
var data = new Date(val)
//7.2获取年月日时分秒
var y=data.getFullYear();
var m=data.getMonth()+1;
var d=data.getDate();
var h=data.getHours();
var mi=data.getMinutes();
var s=data.getSeconds();
m<10&&(m='0'+m);
d<10&&(d='0'+d);
return `${y}-${m}-${d}-${h}-${mi}-${s}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
