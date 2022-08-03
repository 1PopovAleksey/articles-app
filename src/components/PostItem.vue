<template>
  <div class="post">
    <div class="posts">
      <div><p><strong>Название:</strong> {{ post.title }}</p></div>
      <div><p><strong>Описание:</strong> {{ post.body }}</p></div>
    </div>
    <div class="post__btn">
      <my-button class="del-btn" @click="$emit('remove', post)">X</my-button>
      <my-button class="open-btn" @click="$router.push(`/posts/${post.id}`)">O</my-button>
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
.posts {
  margin: 0 20px 0 0;
}

.post {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 800px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
}

.post:not(:first-child) {
  margin: 20px 0 0 0;
}

.post__btn {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.del-btn {
  padding: 0 0 0 1px;
  width: 20px;
  height: 20px;
}

.del-btn:hover {
  color: #c81414 !important;
}

.open-btn {
  margin: 5px 0 0 0;
  padding: 0 0 0 0.5px;
  width: 20px;
  height: 20px;
}

.open-btn:hover {
  color: #1414c8 !important;
}
</style>