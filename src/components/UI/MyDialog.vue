<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <div class="del-btn__block">
        <my-button class="del-btn" @click="hideDialog">X</my-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  position: relative;
  margin: 0 auto;
  padding: 20px;
  background: #FFF;
  min-height: max-content;
  max-width: 360px;
}

.del-btn__block {
  display: flex;
  align-items: start;
  justify-content: end;
}

.del-btn {
  position: absolute;
  padding: 0 0 0 1px;
  width: 20px;
  height: 20px;
}
</style>