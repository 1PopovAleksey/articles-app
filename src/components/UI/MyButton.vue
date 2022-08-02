<template>
  <button class="del-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<style scoped>
button {
  padding: 10px 10px;
  border: none;
  background: #121212;
  color: #FFF;
  font-family: Monospace, system-ui;
}
</style>