<template>
  <form @submit.prevent="submit">
    <input type="email" v-model="form.email" />
    <br />

    <textarea v-model="form.description" />
    <br />

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>

    <input type="checkbox" v-model="form.subscribe" />
    <br />

    weekly: <input type="radio" value="weekly" v-model="form.interval" />
    monthly: <input type="radio" value="monthly" v-model="form.interval" />

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        description: '',
        city: '',
        subscribe: false,
        interval: ''
      }
    }
  },
  methods: {
    async submit() {
      this.$emit('submit', this.form)
    }
  }
}
</script>
