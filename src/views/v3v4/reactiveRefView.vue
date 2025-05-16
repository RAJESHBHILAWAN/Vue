<template>
    <div>
      <h2>Using ref</h2>
      <p>Count: {{ count }}</p>
      <input type="text" v-model.number="count">
        {{ countplusone }}
      <button @click="incrementCount">Increment Count</button>

      <h2>Using reactive</h2>
      <input type="text" v-model="person.name">
      <input type="text" v-model="person.age">

      <p>Name: {{ person.name }}</p>
      <p>Age: {{ person.age }}</p>
      <button @click="updatePerson">Update Person</button>
    </div>
    {{ FinalPerson }}

    <div>
    <button @click="toggleDiv">Toggle Div</button>
    <div v-if="dataModel.showDiv.value">Some hidden text</div>
    <div>Counter: {{ dataModel.counter }}</div>
  </div>
  </template>

<script>
import { ref, reactive, computed, shallowReactive } from 'vue'

export default {
  setup () {
    const count = ref(0)
    const person = reactive({
      name: 'John Doe',
      age: 30
    })

    const incrementCount = () => {
      count.value++
    }

    const updatePerson = () => {
      person.name = 'Jane Smith'
      person.age = 25
    }
    const FinalPerson = computed(() => {
      return person.name + ' ' + person.age
    })
    const countplusone = computed(() => {
      return count.value + 1
    })
    const dataModel = shallowReactive({
      counter: 0,
      showDiv: { value: false }
    })

    const toggleDiv = () => {
      dataModel.counter++ // Triggers reactivity
      dataModel.showDiv.value = !dataModel.showDiv.value // Doesn't trigger reactivity
      console.log(`counter: ${dataModel.counter}`)
    }
    return {
      count,
      person,
      incrementCount,
      updatePerson,
      FinalPerson,
      countplusone,
      dataModel,
      toggleDiv
    }
  }
}
</script>
