<template>
  <div class="container">
    <div class="add-block">
      <h1>Страница с постами</h1>
      <my-button class="add-post" @click="showDialog">Создать пост</my-button>
    </div>
    <my-select class="select" v-model="selectedSort" :options="sortOptions"/>
    <post-list v-if="!isPostsLoading" :posts="sortedPosts" @remove="removePost"/>
    <div v-if="isPostsLoading">
      <p class="loading">Идёт загрузка
        <span class="loading__dot-1">.</span>
        <span class="loading__dot-2">.</span>
        <span class="loading__dot-3">.</span>
      </p>
    </div>
    <my-button v-if="posts.length > 0" class="btn-more" @click="fetchPosts">Показать ещё</my-button>
    <my-button v-else v-if="!isPostsLoading" class="btn-download" @click="fetchPosts">Загрузить посты</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";

export default {
  components: {MySelect, MyButton, PostList, PostForm},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const resPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
        this.posts = resPosts.data;
      } catch (err) {
        alert('error')
      } finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    }
  },
  watch: {

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  margin: 0 auto;
  width: 800px;
}

.add-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.add-post {
  margin: 10px 0 0 0;
  width: 320px;
}

.select {
  font-family: Monospace, system-ui;
  padding: 5px 10px 5px 10px;
  margin: 10px 0 0 0;
  height: 35px;
  width: 320px;
  border-radius: 0;
  border: 2px solid #000;
  color: #000;
  transition: all .2s ease;
}

.select:focus,
.select:focus-visible,
.select:active {
  border-radius: 0;
  border: 2px solid #000;
}

.select:hover {
  padding: 0;
  background: black;
  color: #FFF;
}

form {
  display: flex;
  flex-direction: column;
  align-content: center;
}

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

.btn-more {
  margin: 20px 0 0 0;
  width: 100%;
}

.btn-download {
  margin: 10px 0 0 0;
  width: 320px;
  border: 2px solid #c81414 !important;
  background-color: #c81414 !important;
}
</style>