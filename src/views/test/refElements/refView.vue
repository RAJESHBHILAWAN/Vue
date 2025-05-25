<template>
  <div>
    <div ref="myElement">This is the element</div>
    <input type="text" ref="myInput" />

    <childRefView ref="child"></childRefView>
    <br>

    <br>
    Message from child: {{ msgfromchild }}
    <br>
    <br>
    <br>

    <button @click="myclick">Get number from child</button>
    Number : {{ numberfromchild }}
  </div>
</template>
<!--Script Setup -->
<script setup>
import childRefView from './childRefView.vue'
import { onMounted, ref, useTemplateRef } from 'vue'

const myElement = ref(null)
const myInput = ref(null)
const childRef = useTemplateRef('child')

const msgfromchild = ref('Original without change')
const numberfromchild = ref(0)
const myclick = () => {
  numberfromchild.value = childRef.value.myvalu
}

onMounted(() => {
  myElement.value.style.color = 'red'
  myInput.value.value = 'Hi from ref'
  childRef.value.myMethod()
  msgfromchild.value = childRef.value.mymessage
})

</script>
