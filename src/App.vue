<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

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
</style>