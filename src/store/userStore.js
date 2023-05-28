
import { defineStore } from 'pinia';

export const useUserStore = defineStore('todos', {
  state: () => ({ user: {name: 'AliS'} }),
  getters: {
    hasUser: (state) => !!state.user.name,
    // getTodosCount: (state) => state.todos.length,

    // },
  },
  actions: {
    // createTodo(todoText) {
    //   log('createTodo:', { todoText });
    //   this.todos.push(todoText);
    // },
  },
  persist: true
});