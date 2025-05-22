<template>

    <div v-for=" (item, index)  in items"   :key="index">
        {{ item }}
    </div>

       <div v-for=" (value, key, index) in myObject"   :key="key">
   Key:    {{ key }}: Name {{ value.name }} Age: {{ value.age }} City: {{ value.city }} (Index: {{ index }})
    </div>
</template>

<script>
export default {
  data: () => {
    return {

      items: ['banana', 'apple', 'guava', 'brinjal', 'potato', 'ladyfinger', 'orange'],
      myObject: [{
        name: 'John Doe',
        age: 30,
        city: 'New York'
      },
      {
        name: 'Mary Jan',
        age: 35,
        city: 'Atlanta'
      }
      ]
    }
  }
}
</script>
