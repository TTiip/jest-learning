<template>
  <div>
    child
    <button class="childClickBtn" @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  methods: {
    handleClick() {
      this.$emit('to-parent')
    }
  }
}
</script>

<style></style>
