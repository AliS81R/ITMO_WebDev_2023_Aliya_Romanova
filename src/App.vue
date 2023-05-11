<script setup>
import MyName from './components/MyName.vue'
</script>

<template>
  <h3>Todo List</h3>
  <input
    v-model="inputText"
    @keyup.enter="canAddItemToTheList && onInputEnterKeyUp()"
  >
  <div>
    List:
    <div
      v-for="(value, index) in todos"
      :key="value"
    >
      {{ index + 1 }}) {{ value }}
      <div>
        <button
          @click="deletedTodos(index)"
        >
          x
        </button>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  data: () => ({
    inputText: '',
    todos: []
  }),
  computed: {
    canAddItemToTheList() {
      return this.todoText.length >0;
    },
    todoText() {return this.inputText.trim(); }
  },
  methods: {
    onInputEnterKeyUp(event) {
      console.log('> APP -> onInputEnterKeyUp', this.inputText);
      this.todos.push(this.todoText);
      this.inputText = '';
    },
    deletedTodos(index) {
      console.log('> App -> deletedTodos');
      this.todos.splice(index);
    }
  }
};
</script>

<style scoped>

</style>
