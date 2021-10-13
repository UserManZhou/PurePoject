import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home";
const Person = ()=> import('views/home/person/Person')
const Novel = () => import('views/home/novel/Novel')
const Note =()=>import('views/home/note/Note')
const SidebarBody = ()=> import('views/body/sidebar/SidebarBody')
const NewSidebarBody = () => import('views/body/sidebar/NewSidebarBody')
const TotalNote = () => import('views/body/sidebar/TotalNote')
const NovelRead = () => import('views/body/novel/NovelRead')
const NovelBooks = () => import('views/body/novel/NovelBooks')
const CultureNovel = () => import('views/body/novel/CultureNovel')
const NovelReadFoot = () => import('views/body/novel/foot/NovelReadFoot')
Vue.use(VueRouter)

const routes = [
  {
    path:'/person',
    component:Person
  },
  {
    path: '/novel',
    component:Novel,
    children: [
      {
        path:'/novelRead',
        component:NovelRead,
        children:[
          {
            path:'/novelReadFoot',
            component:NovelReadFoot
          }
        ]
      },
      {
        path:'/novelBooks',
        component:NovelBooks
      },
      {
        path:'/',
        redirect: '/novelRead'
      },
      {
        path:'/cultureNovel',
        component:CultureNovel
      }
    ]
  },
  {
    path:'/note',
    component:Note,
    children:[
      {
        path:'/sidebar',
        component:SidebarBody
      },
      {
        path: '/',
        redirect:'/sidebar'
      },
      {
        path:'/newsidebar',
        component:NewSidebarBody
      },
      {
        path:'/totalNote',
        component:TotalNote
      }
    ]
  },
  {
    path:'/home',
    component:Home
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
