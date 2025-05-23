//MainComponent
<template>
  <div class="container" >
    <div class="row">
      <div class="col sm-2">
        &nbsp;&nbsp;&nbsp;Functional components in Vue 3 are primarily used for performance<br>
         optimization and simplifying
        component structure when reactivity and state management are not required.<br> These components are plain
        functions that receive props and context as arguments, rendering UI based on these inputs.<br>
        Uses of Functional Components:<br>
        Simple Presentational Components:<br>
        When a component's sole purpose is to display data passed down as props,<br> a functional component is ideal.
        They avoid the overhead of Vue's reactivity system, resulting in faster<br> rendering.
        High-Performance Scenarios:
        In situations with many component instances, such as rendering large <br>lists, functional components can
        significantly improve performance due to their lightweight nature.<br>
        Dynamic Headings or Text Elements:
        Components that render different HTML tags based on props, like a <br>dynamic heading component that
        renders h1, h2, etc., can be effectively implemented as functional<br> components.
        Wrapping other Components:
        For example, a component that provides layout or styling but doesn't<br> manage its own state can be a
        functional component.

      </div>

    </div>

  </div>
<br><br><br><br>
  <input v-model="mymessage">
  <MyFunctionalComponent :message="mymessage" @my-event='handleMyEvent'>
    <p>Slot content</p>
  </MyFunctionalComponent>
</template>

<script>
import MyFunctionalComponent from '@/views/Advanced/FunctionalComponent/MyFunctionalComponent.vue'

export default {
  components: { MyFunctionalComponent },
  data () {
    return {
      mymessage: 'Hi from Rajesh'
    }
  },
  methods: {
    handleMyEvent (payload) {
      alert('df')
      console.log('Event emitted with payload:', payload)
    }
  }
}
</script>
