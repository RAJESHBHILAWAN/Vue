import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import vuefourView from '@/views/vuefourView.vue'
import vuethreeView from '@/views/vuethreeView.vue'
import teleportView from '@/views/teleportView'
import mymodalView from '@/views/mymodalView.vue'
import SuspenseView from '@/views/SuspenseView.vue'
import computedView from '@/views/computedView.vue'
import reactiverefView from '@/views/reactiveRefView.vue'
import SctiptSetupView from '@/views/SctiptSetupView.vue'
import ComposablesView from '@/views/ComposablesView.vue'
import PiniaView from '@/views/PiniaView.vue'
import FragmentView from '@/views/FragmentView.vue'
import ParentView from '@/views/ParentView.vue'
import MyMixinView from '@/views/MyMixinView.vue'
import VParentView from '@/views/vmodel/VParentView.vue'
import TwoParentView from '@/views/vmodel/TwoParentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/TwoParentView',
    name: 'TwoParentView',
    component: TwoParentView
  },
  {
    path: '/VParentView',
    name: 'VParentView',
    component: VParentView
  },
  {
    path: '/mymixin',
    name: 'MyMixinView',
    component: MyMixinView
  },
  {
    path: '/parent',
    name: 'ParentView',
    component: ParentView
  },
  {
    path: '/fragment',
    name: 'FragmentView',
    component: FragmentView
  },
  {
    path: '/piniavu',
    name: 'PiniaView',
    component: PiniaView
  },
  {
    path: '/composable',
    name: 'Composable',
    component: ComposablesView
  },
  {
    path: '/scriptsetup',
    name: 'ScriptSetUp',
    component: SctiptSetupView
  },
  {
    path: '/rr',
    name: 'ReactiveRef',
    component: reactiverefView
  },
  {
    path: '/comp',
    name: 'ComputedView',
    component: computedView
  },
  {
    path: '/suspense',
    name: 'SuspanseView',
    component: SuspenseView
  },
  {
    path: '/modal',
    name: 'ModalView',
    component: mymodalView
  },
  {
    path: '/tele',
    name: 'Teleport',
    component: teleportView
  },
  {
    path: '/vue4',
    name: 'Vue4',
    component: vuefourView
  },
  {
    path: '/vue3',
    name: 'Vue3',
    component: vuethreeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
