<template>
  <div>
    <p class="loading">Идёт загрузка
      <span class="loading__dot-1">.</span>
      <span class="loading__dot-2">.</span>
      <span class="loading__dot-3">.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "loading",
}
</script>

<style scoped>
.loading {
  margin: 10px 0 0 0;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.loading__dot-1 {
  animation: blink .5s infinite;
}

.loading__dot-2 {
  animation: blink .6s infinite;
}

.loading__dot-3 {
  animation: blink .7s infinite;
}
</style>