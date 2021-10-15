import Vue from 'vue'
import VueRouter from 'vue-router'

import {data} from "assets/routerJs/RouterJs";
Vue.use(VueRouter)

const routes = [
  {
    path:'/person',
    component: data.Person
  },
  {
    path: '/novel',
    component:data.Novel,
    children: [
      {
        path:'/novelRead',
        component:data.NovelRead,
        children:[
          {
            path:'/novelReadFoot',
            component:data.NovelReadFoot
          },
          {
            path:'/novelRead_Foot',
            component:data.NovelRead_Foot
          },
          {
            path:'/novelRead__Foot',
            component: data.Novel__Foot
          },
          {
            path:'/novelRead___Foot',
            component: data.NovelRead___Foot
          },
          {
            path:'/novelRead____Foot',
            component: data.NovelRead____Foot
          },
          {
            path:'/',
            redirect:'/novelReadFoot'
          }
        ]
      },
      {
        path:'/novelBooks',
        component:data.NovelBooks,
        children:[
          {
            path:'/novelBookFoot',
            component:data.NovelBookFoot
          }
        ]
      },
      {
        path:'/',
        redirect: '/novelRead'
      },
      {
        path:'/cultureNovel',
        component:data.CultureNovel
      }
    ]
  },
  {
    path:'/note',
    component:data.Note,
    children:[
      {
        path:'/sidebar',
        component:data.SidebarBody
      },
      {
        path: '/',
        redirect:'/sidebar'
      },
      {
        path:'/newsidebar',
        component:data.NewSidebarBody
      },
      {
        path:'/totalNote',
        component:data.TotalNote
      }
    ]
  },
  {
    path:'/home',
    component:data.Home
  },
  {
    path: '/',
    redirect:'/person'
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
