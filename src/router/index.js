import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home";
const Person = ()=> import('views/home/person/Person')
const Novel = () => import('views/home/novel/Novel')
const Note =()=>import('views/home/note/Note')
const SidebarBody = ()=> import('views/body/sidebar/SidebarBody')
const NewSidebarBody = () => import('views/body/sidebar/NewSidebarBody')
const TotalNote = () => import('views/body/sidebar/TotalNote')
Vue.use(VueRouter)

const routes = [
  {
    path:'/person',
    component:Person
  },
  {
    path: '/novel',
    component:Novel
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
