<template>
  <div class="container">
    <post-form @create="createPost"/>
    <post-list :posts="posts" @remove="removePost"/>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
  components: {PostList, PostForm},
  data() {
    return {
      posts: [
        {id: 1, title: 'Java', descr: 'Старый язык'},
        {id: 2, title: 'JavaScript', descr: 'Хайп'},
        {id: 3, title: 'PHP', descr: 'Кто?'},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Monospace, system-ui;
}

.container {
  padding: 60px 0;
  margin: 0 auto;
  width: 800px;
}

form {
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>