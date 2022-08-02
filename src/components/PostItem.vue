<template>
  <div class="post">
    <div>
      <div><p><strong>Название:</strong> {{ post.title }}</p></div>
      <div><p><strong>Описание:</strong> {{ post.body }}</p></div>
    </div>
    <div class="post__btn">
      <my-button class="del-btn" @click="$emit('remove', post)">X</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
}

.post:not(:first-child) {
  margin: 20px 0 0 0;
}

.del-btn {
  padding: 0 0 0 1px;
  width: 20px;
  height: 20px;
}
</style>