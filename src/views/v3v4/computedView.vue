<template>
First Name <input v-model="Fname" />
Last Name <input v-model="Lname" />
{{ Fullname }}
</template>

<script>

export default {
  name: 'MyComputed',
  data: function () {
    return {
      Fname: 'Rajesh',
      Lname: 'Verma'
    }
  },
  computed: {
    Fullname () {
      return this.Fname + ' ' + this.Lname
    }
  }

}
</script>
