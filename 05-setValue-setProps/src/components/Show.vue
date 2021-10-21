<template>
  <div v-if="show">{{ greeting }}</div>
  <pass-word />
</template>

<script>
import PassWord from '../components/Password.vue'
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  components: {
    PassWord
  },
  data() {
    return {
      greeting: ''
    }
  }
}
</script>
