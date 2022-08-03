<template>
  <div class="block-center">
    <h1>Приветствую на моём сайте с статьями!</h1>
    <router-link class="link" to="/posts" tabindex="-1">
      <my-button class="watch-link">Смотреть статьи</my-button>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {}


}
</script>

<style scoped>
.block-center {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.link {
  margin: 20px 0 0 0;
}

.watch-link {
  width: 800px;
}

.watch-link:active,
.watch-link:focus-visible,
.watch-link:focus {
  width: 200px;
  border-radius: 30px;
}
</style>