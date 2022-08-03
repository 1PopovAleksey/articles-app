<template>
  <div>
    <h2>Создание поста</h2>
    <form @submit.prevent>
      <my-input v-model="post.title" class="input" type="text"
             placeholder="Название"/>
      <my-input v-model="post.body" class="input" type="text"
             placeholder="Описание"/>
      <my-button class="add-btn" type="submit" @click="createPost">Создать</my-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost(event) {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    },
  }
}
</script>

<style scoped>
.add-btn {
  margin: 10px 0 0 0;
  width: 100%;
}
</style>