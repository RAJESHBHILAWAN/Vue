<script>
import SideBarLink from './SideBarLink'
import { collapsed, toggleSidebar, sideBarWidth } from './state'
import { ref } from 'vue'
export default {
  props: {},
  components: { SideBarLink },
  setup () {
    const togglebf = ref(false)
    const togglemain = ref(false)
    const toggletest = ref(false)
    const togglepc = ref(false)
    const togglev3v4 = ref(false)
    const toggleadv = ref(false)

    const bftoggle = () => {
      inivalues()
      togglebf.value = !togglebf.value
    }
    const maintoggle = () => {
      inivalues()
      togglemain.value = !togglemain.value
    }
    const testtoggle = () => {
      inivalues()
      toggletest.value = !toggletest.value
    }
    const pctoggle = () => {
      inivalues()
      togglepc.value = !togglepc.value
    }
    const v3v4toggle = () => {
      inivalues()
      togglev3v4.value = !togglev3v4.value
    }
    const advtoggle = () => {
      inivalues()
      toggleadv.value = !toggleadv.value
    }
    const inivalues = () => {
      togglebf.value = false
      togglemain.value = false
      toggletest.value = false
      togglepc.value = false
      togglev3v4.value = false
      toggleadv.value = false
    }
    return {
      inivalues,
      collapsed,
      toggleSidebar,
      sideBarWidth,
      togglebf,
      bftoggle,
      maintoggle,
      togglemain,
      testtoggle,
      toggletest,
      togglepc,
      pctoggle,
      v3v4toggle,
      togglev3v4,
      advtoggle,
      toggleadv
    }
  }
}
</script>

<template>

  <div class="sidebar" :style="{ width: sideBarWidth }">

    <h1>
      <span @click="toggleSidebar" v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span @click="toggleSidebar" v-else>Vue Sidebar</span>
    </h1>
    <h4 @click="maintoggle">Main</h4>
    <div v-show="togglemain">
      <SideBarLink to="/" icon="fas fa-home">Home</SideBarLink>
      <SideBarLink to="/dashboard" icon="fas fa-columns">Dashboard</SideBarLink>
    </div>
    <h4 @click="bftoggle">Basic Functions</h4>
    <div v-show="togglebf" style="overflow-x: auto;">
      <SideBarLink to="/parentinjectView" icon="fas fa-columns">Inject</SideBarLink>
      <SideBarLink to="/suspenseView" icon="fas fa-columns">SusAsync</SideBarLink>
      <SideBarLink to="/asynccompo" icon="fas fa-columns">AsyncCompo</SideBarLink>
      <SideBarLink to="/compositeView" icon="fas fa-columns">Composite</SideBarLink>
      <SideBarLink to="/DynamicView" icon="fas fa-columns">DynamicView</SideBarLink>
      <SideBarLink to="/ExtendsView" icon="fas fa-columns">ExtendsView</SideBarLink>
      <SideBarLink to="/BaseView" icon="fas fa-columns">BaseView</SideBarLink>
      <SideBarLink to="/LocalStorage" icon="fas fa-columns">LocalStorage</SideBarLink>
      <SideBarLink to="/MixinView" icon="fas fa-columns">MixinView</SideBarLink>
      <SideBarLink to="/PreView" icon="fas fa-columns">PreView</SideBarLink>
      <SideBarLink to="/FeatureView" icon="fas fa-columns">Frag</SideBarLink>
      <SideBarLink to="/Mixin1" icon="fas fa-columns">Mixin1</SideBarLink>
      <SideBarLink to="/ErrHandle" icon="fas fa-columns">ErrHandle</SideBarLink>
      <SideBarLink to="/loopView" icon="fas fa-columns">Loop</SideBarLink>
    </div>
    <h4 @click="testtoggle">Test</h4>
    <div v-show="toggletest" style="overflow-x: auto;">
      <SideBarLink to="/tParentView" icon="fas fa-columns">TParent</SideBarLink>
      <SideBarLink to="/cParentView" icon="fas fa-columns">CParent</SideBarLink>
      <SideBarLink to="/P2View" icon="fas fa-columns">P2View</SideBarLink>
      <SideBarLink to="/ErrBoundary" icon="fas fa-columns">ErrBound</SideBarLink>

    </div>
    <h4 @click="pctoggle">ParentChild</h4>
    <div v-show="togglepc" style="overflow-x: auto;">
      <SideBarLink to="/cKeyEvents" icon="fas fa-columns">KeyEvents</SideBarLink>
      <SideBarLink to="/WatchEvent" icon="fas fa-columns">WatchEvent</SideBarLink>
      <SideBarLink to="/Watch2View" icon="fas fa-columns">Watch2View</SideBarLink>
      <SideBarLink to="/DView" icon="fas fa-columns">Directive</SideBarLink>
      <SideBarLink to="/Axi" icon="fas fa-columns">Axios</SideBarLink>
      <SideBarLink to="/anotherwatchview" icon="fas fa-columns">Watch</SideBarLink>
      <SideBarLink to="/VuexExample" icon="fas fa-columns">VuexEx</SideBarLink>
      <SideBarLink to="/VuexExampleB" icon="fas fa-columns">VuexExB</SideBarLink>
      <SideBarLink to="/asyncawait" icon="fas fa-columns">AsyncAwait</SideBarLink>
      <SideBarLink to="/SyncParentComponent" icon="fas fa-columns">SyncPComp</SideBarLink>
      <SideBarLink to="/Sync1View" icon="fas fa-columns">Sync1View</SideBarLink>
    </div>
    <h4 @click="v3v4toggle">V3V4</h4>
    <div v-show="togglev3v4" style="overflow-x: auto;">
      <SideBarLink to="/SlotView" icon="fas fa-columns">SlotView</SideBarLink>
      <SideBarLink to="/Compos" icon="fas fa-columns">Composables</SideBarLink>
      <SideBarLink to="/computedvu" icon="fas fa-columns">Computed</SideBarLink>
      <SideBarLink to="/frag" icon="fas fa-columns">Frag.</SideBarLink>
      <SideBarLink to="/modal" icon="fas fa-columns">Modal View</SideBarLink>
      <SideBarLink to="/pinia" icon="fas fa-columns">Pinia</SideBarLink>
      <SideBarLink to="/reactiveRefView" icon="fas fa-columns">Ref View</SideBarLink>
      <SideBarLink to="/MyMixinView" icon="fas fa-columns">MixinView</SideBarLink>
      <SideBarLink to="/mydirectiveView" icon="fas fa-columns">Directive</SideBarLink>

    </div>
    <h4 @click="advtoggle">Advanced</h4>
    <div v-show="toggleadv" style="overflow-x: auto;">
      <SideBarLink to="/HTTPRequestsView" icon="fas fa-columns">HTTPReqView</SideBarLink>
      <SideBarLink to="/messageSubjectView" icon="fas fa-columns">msgSubView</SideBarLink>
      <SideBarLink to="/compositionView" icon="fas fa-columns">compo</SideBarLink>
      <SideBarLink to="/carpartsApi" icon="fas fa-columns">carparts</SideBarLink>
      <SideBarLink to="/AxiosWithSwitchMap" icon="fas fa-columns">AxiosSwitch</SideBarLink>
      <SideBarLink to="/FuncComp" icon="fas fa-columns">FuncComp</SideBarLink>
      <SideBarLink to="/debounce" icon="fas fa-columns">Debounce</SideBarLink>
      <SideBarLink to="/axiosWithrxjs" icon="fas fa-columns">axiosWithrxjs</SideBarLink>

    </div>
    <!---------------------------------------->

    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f3c85;
  --sidebar-item-hover: #6c38a1;
  --sidebar-item-active: #2c2767;
}
</style>

<style scoped>
h4 {
  color: #b7b7fd;
}

.sidebar {

  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 1.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
