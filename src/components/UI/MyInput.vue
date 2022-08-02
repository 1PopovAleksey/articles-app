<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 10px;
  margin: 5px 0 10px 0;
  border: none;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  font-family: Monospace, system-ui;
}

input::placeholder {
  font-family: Monospace, system-ui;
}
</style>