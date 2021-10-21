<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Form />
  <hr style="margin: 60px 0;" />
  <CustomRadio />
  <hr style="margin: 60px 0;" />
  <CustomInput />
  <hr style="margin: 60px 0;" />
  <ComplexForm />
</template>

<script>
import Form from './components/Form.vue'
import CustomRadio from './components/CustomRadio.vue'
import CustomInput from './components/CustomInput.vue'
import ComplexForm from './components/ComplexForm.vue'

export default {
  name: 'App',
  components: {
    Form,
    CustomRadio,
    CustomInput,
    ComplexForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
