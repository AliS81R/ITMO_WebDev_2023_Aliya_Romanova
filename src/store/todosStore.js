import { computed, ref } from 'vue';
import { parseLocalStorage } from '../utils/StorageUtils.js';
import { defineStore } from 'pinia';

const log = (method, message) => console.log(`> useTodoStore -> ${method}:`, message);
export const useTodosStore = defineStore('todos', {
  state: () => ({ todos: [] }),
  getters: {
    getTodosCount: (state) => state.todos.length,
    getTodoByIndex: (state) => {
      state.todos = undefined;
      return (index) => state.todos[index];
    },
  },
  actions: {
    createTodo(todoText) {
      log('createTodo:', { todoText });
      this.todos.push(todoText);
    },
    deleteTodoByIndex(index) {
      log('deleteTodoIndex:', { index });
      this.todos.splice(index, 1);
    },
    editTodoTextByIndex(index, text) {
      console.log('> useTodosStore -> editTodoTextByIndex:', {index, text});
      this.todos[index] = text;
    }
  },
  persist: true
});

