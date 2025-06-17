<template>
  <div @click="parentClick">
    <button @click.prevent.stop="buttonClick">Click Me</button>
    <button @click.prevent="buttonClick">Click Me without Stop</button>
    <br>
    Message One: {{ msgone }} <br>
    Message Two : {{ msgtwo }}
  </div>
<br><br><br><br>
  <form @submit.prevent="submitForm">
    For example, when you click on a submit button in a form,<br>
    the default action is to submit<br>
     the form and refresh the page. If you want to<br>
     handle the form submission using<br>
     JavaScript or prevent the page from reloading, you can use @click.prevent.<br>
    <button type="submit">Submit with prevent</button>
  </form>
  <br>
   <form >
    <button type="submit">Submit without prevent</button>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      msgone: '',
      msgtwo: ''
    }
  },
  methods: {
    parentClick () {
      this.msgone = 'Parent clicked'
    },
    buttonClick () {
      this.msgtwo = 'Button clicked'
    },
    submitForm () {
      // Custom form submission logic
      console.log('Form submitted')
    }
  }
}
</script>
