<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
  </div>
  <h2 v-else>
    Список постов пуст
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 30px 0 0 0;
}

h2 {
  margin: 50px 0 0 0;
  color: #c81414;
  text-align: center;
}
</style>