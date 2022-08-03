<template>
  <h1>Страница с постами</h1>
  <my-button class="add-post" @click="showDialog">Создать пост</my-button>
  <my-select class="select" v-model="selectedSort" :options="sortOptions"/>
  <my-input
      v-model="searchQuery"
      placeholder="Поиск..."
  />
  <div class="choose-wrapper">
      <span class="choose-page" v-for="pageNumber in totalPages" :key="pageNumber"
            :class="{'current-page': page === pageNumber}" @click="changePage(pageNumber)">{{ pageNumber }}</span>
  </div>
  <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost"/>
  <loading v-if="isPostsLoading"/>
  <my-button v-if="posts.length > 0 && !isPostsLoading" class="btn-more" @click="loadMorePosts">
    {{ page === 10 ? 'Вернуться к первой странице' : 'Следующая страница' }}
  </my-button>
  <my-button v-else v-if="!isPostsLoading" class="btn-download" @click="fetchPosts">Загрузить посты</my-button>
  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost"/>
  </my-dialog>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from "axios";

export default {
  name: 'posts',
  components: {PostList, PostForm},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        if (this.page >= 11) {
          this.page = 1;
        }
        this.isPostsLoading = true;
        const resPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(resPosts.headers['x-total-count'] / this.limit)
        this.posts = resPosts.data;
      } catch (err) {
        alert('error')
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const resPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(resPosts.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...resPosts.data];
      } catch (err) {
        alert('error')
      }
    }
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    //
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting) {
    //     this.loadMorePosts();
    //   }
    // };
    //
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    page() {
      this.fetchPosts()
    }
  }

}
</script>

<style scoped>
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
  background: black;
  color: #FFF;
}

.select:hover {
  padding: 5px 10px 5px 5px;
  background: black;
  color: #FFF;
}

.choose-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0 0;
  width: 320px;
}

.choose-page {
  padding: 5px;
  cursor: pointer;
  transition: all .2s ease;
}

.choose-page:hover {
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
}

.current-page {
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
}

form {
  display: flex;
  flex-direction: column;
  align-content: center;
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