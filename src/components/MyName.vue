<template>
  <h1>Enter you name</h1>
  <div>
    {{ firstName }}
    <span style="color: red">
      {{ lastName }}
    </span>
  </div>
  <small>
    <span :class="status ? 'selected' : 'unselected'">
      <h2>
        Status:
      </h2>
    </span>
    <span>{{ status }}</span>
    <div>
      <button
        :style="{
          visibility: status ? 'visible' : 'hidden'
        }"
        @click="onResetClick"
      >
        Reset
      </button>
    </div>
  </small>
</template>

<script>
export default {
  name: "MyName",
  props: {
    status: {
      type: String,
      default: 'empty'
    },
  },
  emits: ['reset'],
  data: () => ({
    firstName: 'Aliya',
    lastName: 'Romanova'
  }),
  methods: {
    onResetClick() {
      console.log('> MyName -> onResetClick');
      this.$emit('reset');
    }
  }

};
</script>

<style scoped>
.selected {
  color: green;
}
.unselected {
  color: red;
}
</style>