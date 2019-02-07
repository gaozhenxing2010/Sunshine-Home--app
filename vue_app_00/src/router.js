import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Test from './components/Test.vue'
import Lsit from './components/lsitContainer.vue'
import Home from './components/tabbar/Home.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import GoodsList from './components/good/GoodsList.vue'
import GoodsInfo from './components/good/GoodsInfo.vue'
import Login from './components/login/Login.vue'
import Cart from './components/tabbar/Cart.vue'
import Search from './components/tabbar/Search.vue'
import about from './components/about/about.vue'
import Personal from './components/tabbar/Personal.vue'
import opinion from './components/about/opinion.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/opinion",component:opinion},
    {path:"/Personal",component:Personal},
    {path:'/about',component:about},
    {path:'/Cart',component:Cart},
    {path:'/',redirect:'/Home'},
    {path:'/Test',component:Test},
    {path:'/List',component:Lsit},
    {path:'/Home',component:Home},
    {path:'/NewsList',component:NewsList},
    {path:'/NewsInfo',component:NewsInfo},
    {path:'/GoodsList',component:GoodsList},
    {path:'/GoodsInfo/:id',component:GoodsInfo},
    {path:'/Login',component:Login},
    {path:'/Search',component:Search},
  ]
})
