import VueRouter from 'vue-router'

//导入对应的路由组件,在下面导入
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由规则
   { path: '/', redirect: '/home' },
   { path: '/home',component:HomeContainer},//连接和组件相对应
   { path: '/member',component:MemberContainer},
   { path: '/shopcar',component:ShopcarContainer},
   { path: '/search',component:SearchContainer}
  ],
  linkActiveClass:'mui-active'//tab点击高亮   替换默认的路由的类router-link-active
})

// 把路由对象暴露出去
export default router