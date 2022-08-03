<template>
  <button>
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
  border: 2px solid #000;
  background: #000;
  color: #FFF;
  font-family: Monospace, system-ui;
  cursor: pointer;
  transition: all .3s ease;
}

button:hover {
  background: #FFF;
  color: #000;
}
</style>