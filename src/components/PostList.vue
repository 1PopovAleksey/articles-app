<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
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

.post-list-item {
  transition: all .3s;
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all .3s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.post-list-move {
  transition: all .5s ease;
}
</style>