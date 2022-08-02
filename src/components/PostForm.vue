<template>
  <div>
    <h2>Создание поста</h2>
    <form @submit.prevent>
      <my-input v-model="post.title" class="input" type="text"
             placeholder="Название"/>
      <my-input v-model="post.descr" class="input" type="text"
             placeholder="Описание"/>
      <my-button type="submit" @click="createPost">Создать</my-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        descr: '',
      }
    }
  },
  methods: {
    createPost(event) {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        descr: '',
      }
    },
  }
}
</script>

<style scoped>

</style>