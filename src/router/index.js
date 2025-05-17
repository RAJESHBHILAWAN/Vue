import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "main" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'DashboardVue',
    component: () => import(/* webpackChunkName: "main" */'../views/DashboardVue.vue')
  },
  {
    path: '/parentinjectView',
    name: 'parentinjectView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/provideinject/bfparentinjectView.vue')
  },
  {
    path: '/asynccompo',
    name: 'asynccompo',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/AsyncComponents/asynccompoView.vue')
  },
  {
    path: '/suspenseView',
    name: 'suspenseView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/AsyncComponents/bfasyncView.vue')
  },
  {
    path: '/compositeView',
    name: 'compositeView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/bfCompositionAPIView.vue')
  },
  {
    path: '/DynamicView',
    name: 'DynamicView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/bfDynamicView.vue')
  },
  {
    path: '/ExtendsView',
    name: 'ExtendsView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/extendsfunction/bfExtendsView.vue')
  },
  {
    path: '/BaseView',
    name: 'BaseView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/extendsfunction/bfBaseView.vue')
  },
  {
    path: '/LocalStorage',
    name: 'LocalStorage',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/bfLocalStorageView.vue')
  },
  {
    path: '/MixinView',
    name: 'MixinView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/mixinsandcomposables/bfMixinView.vue')
  },
  {
    path: '/PreView',
    name: 'PreView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/bfPreView.vue')
  },
  {
    path: '/FeatureView',
    name: 'FeatureView',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/fragmentFeature/bfFragFeatureView.vue')
  },
  {
    path: '/Mixin1',
    name: 'Mixin1',
    component: () => import(/* webpackChunkName: "basicfunctions" */'../views/basicfunctions/mixinsandcomposables/bfMixin1View.vue')
  },
  {
    path: '/tParentView',
    name: 'tParentView',
    component: () => import(/* webpackChunkName: "test" */'../views/test/tParentView.vue')
  },
  {
    path: '/cParentView',
    name: 'cParentView',
    component: () => import(/* webpackChunkName: "test" */'../views/test/cParentView.vue')
  },
  {
    path: '/P2View',
    name: 'P2View',
    component: () => import(/* webpackChunkName: "test" */'../views/test/P2/P2View.vue')
  },
  {
    path: '/ErrBoundary',
    name: 'ErrBoundary',
    component: () => import(/* webpackChunkName: "test" */'../views/test/ErrBoundaries/MainCompoFunctionView.vue')
  },
  {
    path: '/cKeyEvents',
    name: 'cKeyEvents',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/KeyEventsView.vue')
  },
  {
    path: '/WatchEvent',
    name: 'WatchEvent',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/WatchView.vue')
  },
  {
    path: '/DView',
    name: 'DView',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/MyDirectiveView.vue')
  },
  {
    path: '/Axi',
    name: 'Axi',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/AxiosView.vue')
  },
  {
    path: '/asyncawait',
    name: 'asyncawait',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/AsyncAwaitView.vue')
  },
  {
    path: '/anotherwatchview',
    name: 'anotherwatchview',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/AnotherWatchView.vue')
  },
  {
    path: '/VuexExample',
    name: 'VuexExample',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/VuexCalc/ComponentA.vue')
  },
  {
    path: '/VuexExampleB',
    name: 'VuexExampleB',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/VuexCalc/ComponentB.vue')
  },
  {
    path: '/SyncParentComponent',
    name: 'SyncParentComponent',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/SyncFunctionality/SyncParentComponent.vue')
  },
  {
    path: '/Sync1View',
    name: 'Sync1View',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/SyncFunctionality/Sync1View.vue')
  },
  {
    path: '/Watch2View',
    name: 'Watch2View',
    component: () => import(/* webpackChunkName: "PCrelations" */'../views/PCrelations/Watch2View.vue')
  },
  {
    path: '/SlotView',
    name: 'SlotView',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/SlotView.vue')
  },
  {
    path: '/Compos',
    name: 'Compos',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/CoposableView.vue')
  },
  {
    path: '/computedvu',
    name: 'computedvu',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/computedView.vue')
  },
  {
    path: '/frag',
    name: 'frag',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/FragmentView.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/mymodalView.vue')
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/PiniaView.vue')
  },
  {
    path: '/MyMixinView',
    name: 'MyMixinView',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/MyMixinView.vue')
  },
  {
    path: '/mydirectiveView',
    name: 'mydirectiveView',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/mydirectiveView.vue')
  },
  {
    path: '/reactiveRefView',
    name: 'reactiveRefView',
    component: () => import(/* webpackChunkName: "v3" */'../views/v3v4/reactiveRefView.vue'),
    beforeEnter: (to, from, next) => {
      const isAuthorized = true
      if (isAuthorized) {
        next()
      } else {
        next('/dashboard')
      }
    }
  },
  {
    path: '/HTTPRequestsView',
    name: 'HTTPRequestsView',
    component: () => import(/* webpackChunkName: "Advanced" */'../views/Advanced/HTTPRequestsView.vue')
  },
  {
    path: '/messageSubjectView',
    name: 'messageSubjectView',
    component: () => import(/* webpackChunkName: "Advanced" */'../views/Advanced/messageSubjectView.vue')
  },
  {
    path: '/compositionView',
    name: 'compositionView',
    component: () => import(/* webpackChunkName: "Advanced" */'../views/Advanced/compositionView.vue')
  },
  {
    path: '/carpartsApi',
    name: 'carpartsApi',
    component: () => import(/* webpackChunkName: "Advanced" */'../views/Advanced/carpartsApi.vue')
  },
  {
    path: '/AxiosWithSwitchMap',
    name: 'AxiosWithSwitchMap',
    component: () => import(/* webpackChunkName: "Advanced" */'../views/Advanced/AxiosWithSwitchMap.vue')
  },
  {
    path: '/FuncComp',
    name: 'FuncComp',
    component: () => import(/* webpackChunkName: "Advanced" */'../views/Advanced/FunctionalComponent/MyFuncComponent.vue')
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: () => import(/* webpackChunkName: "Advanced" */'../views/Advanced/debounceView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // to: the target Route Object being navigated to.
  // from: the current route, about to leave.
  // next: a function that resolves the hook.
  if (to.meta.requiresAuth) {
    // Check if the route requires authentication */
    const isAuthenticated = localStorage.getItem('token')
    if (isAuthenticated) {
      next() // Proceed to the route
      console.log(isAuthenticated)
      console.log('1')
    } else {
      next('/') // Redirect to login page
      console.log('2')
    }
  } else {
    next() // Proceed to the route
    console.log('3')
  }
})
export default router
