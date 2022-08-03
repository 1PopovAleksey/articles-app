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
  padding: 5px 10px 5px 10px;
  margin: 10px 0 0 0;
  height: 35px;
  width: 320px;
  border-radius: 0;
  border: 2px solid #000;
  color: #000;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  font-family: Monospace, system-ui;
  transition: all .2s ease;
}

.input:focus,
.input:focus-visible,
.input:active {
  border-radius: 0;
  border: 2px solid #000;
  background: black;
  color: #FFF;
}

.input:hover {
  padding: 5px 10px 5px 5px;
  background: black;
  color: #FFF;
}

.input::placeholder {
  color: black;
  font-family: Monospace, system-ui;
  transition: all .2s ease;
}

.input:hover::placeholder {
  color: white;
}
</style>