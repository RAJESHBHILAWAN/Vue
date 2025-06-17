<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <Field id="name" name="name" type="text" rules="required|min:3" />
      <ErrorMessage name="name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <Field id="email" name="email" type="email" rules="required|email" />
      <ErrorMessage name="email" />
    </div>
    <button type="submit">Submit</button>

          <div>
        <input type="text" v-model="phone" v-mask="'(###) ###-####'">
        <p>Phone number: {{ phone }}</p>

        <input type = "text" v-model = "date" v-mask="'##/##/####'">
        <p>Date: {{ date }}</p>
      </div>

  </form>
</template>

<script>
import { useForm, Field, ErrorMessage } from 'vee-validate'
import { object, string } from 'yup'
import { ref } from 'vue'

export default {
  components: {
    Field,
    ErrorMessage
  },
  setup () {
    const phone = ref('')
    const date = ref('')

    const validationSchema = object({
      name: string().required().min(3),
      email: string().required().email()
    })

    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        name: '',
        email: ''
      }
    })

    const onSubmit = values => {
      alert(JSON.stringify(values, null, 2))
    }

    return {
      date,
      phone,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
}
</script>
