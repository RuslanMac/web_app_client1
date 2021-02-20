<template>
  <div>
    <label v-if="label">{{ label }}</label>

    <input :id="label" :value="value" v-bind="$attrs" @input="updateValue" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String,
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
  padding: 10px;
  width: 100%;
}
</style>
