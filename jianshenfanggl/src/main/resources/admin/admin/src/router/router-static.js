import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import jianshenkecheng from '@/views/modules/jianshenkecheng/list'
    import jianshenkechengCollection from '@/views/modules/jianshenkechengCollection/list'
    import jianshenkechengLiuyan from '@/views/modules/jianshenkechengLiuyan/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import jiaolianYuyue from '@/views/modules/jiaolianYuyue/list'
    import news from '@/views/modules/news/list'
    import singleSeach from '@/views/modules/singleSeach/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJianshenkecheng from '@/views/modules/dictionaryJianshenkecheng/list'
    import dictionaryJianshenkechengCollection from '@/views/modules/dictionaryJianshenkechengCollection/list'
    import dictionaryJiaolianYuyueYesno from '@/views/modules/dictionaryJiaolianYuyueYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionarySingleSeach from '@/views/modules/dictionarySingleSeach/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJianshenkecheng',
        name: '健身课程类型',
        component: dictionaryJianshenkecheng
    }
    ,{
        path: '/dictionaryJianshenkechengCollection',
        name: '收藏表类型',
        component: dictionaryJianshenkechengCollection
    }
    ,{
        path: '/dictionaryJiaolianYuyueYesno',
        name: '预约状态',
        component: dictionaryJiaolianYuyueYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '资讯类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionarySingleSeach',
        name: '单页数据类型',
        component: dictionarySingleSeach
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '健身论坛',
        component: forum
      }
    ,{
        path: '/jianshenkecheng',
        name: '健身课程',
        component: jianshenkecheng
      }
    ,{
        path: '/jianshenkechengCollection',
        name: '课程收藏',
        component: jianshenkechengCollection
      }
    ,{
        path: '/jianshenkechengLiuyan',
        name: '课程留言',
        component: jianshenkechengLiuyan
      }
    ,{
        path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
    ,{
        path: '/jiaolianYuyue',
        name: '教练预约申请',
        component: jiaolianYuyue
      }
    ,{
        path: '/news',
        name: '健身资讯',
        component: news
      }
    ,{
        path: '/singleSeach',
        name: '单页数据',
        component: singleSeach
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
