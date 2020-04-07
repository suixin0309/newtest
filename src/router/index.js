import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import NavComponent from "../components/NavComponent";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/nav/standard/list'
    }
  ]
})

export const DynamicRouter = [
  {
    path: '/nav',
    component: NavComponent,
    name: 'NavComponent',
    meta: {
      requiresAuth: true,
      name: '首页'
    },
    children: [

    ]
  }
]
