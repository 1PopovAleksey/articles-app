<template>
  <div class="full-post">

    <p><strong>id:</strong> {{ $route.params.id }}</p>
    <my-button class="back" @click="$router.push('/posts')">Назад</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "FullPost",
  components: {MyButton},
}
</script>

<style scoped>
.full-post {
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

.back {
  margin: 10px 0 0 0;
  width: 100%;
}
</style>