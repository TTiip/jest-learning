<template>
  <form>
    {{ radio }}
    <el-radio v-model="radio" ref="radio" label="true">radio</el-radio>
    <el-button @click.prevent="handleClick">Send</el-button>
  </form>
</template>

<script>
import { ElButton, ElRadio } from 'element-plus'
export default {
  name: 'CustomRadio',
  components: {
    ElButton,
    ElRadio
  },
  data() {
    return {
      radio: 'false'
    }
  },
  methods: {
    handleClick() {
      this.$emit('submit', this.radio)
    }
  }
}
</script>
