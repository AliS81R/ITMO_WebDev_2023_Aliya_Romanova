<script setup>
import TodoItem from "../TodoItem.vue";
import AppHeader from "./components/AppHeader.vue";</script>

<template>
  <AppHeader>
    Todo App
    <template #sub-header>
      <span v-if="user">created by {{ user.name }}</span>
      <span v-else>noname</span>
    </template>
  </AppHeader>
  <input
    ref="domInput"
    v-model="inputText"
    @keyup.enter="canAddItemToTheList && onInputEnterKeyUp()"
  >
  <div>
    List: <span v-if="todos.length">{{ getTodoCount }}</span>
    <span v-else>empty</span>
    <TodoItem
      v-for="(value, index) in todos"
      :key="value"
      :index="index + 1"
      :text="value"
      @delete="deletedTodos(index)"
    />
  </div>
</template> 
<script>


const LOCAL_KEY_TODOS = 'todos';
const LOCAL_INPUT_TEXT = 'input_Text';

let todoStopWatch;

export default {
  data: () => ({
    inputText: '',
    todos: [],
    user: null,
  }),
  computed: {
    canAddItemToTheList() {
      return this.todoText.length >0;
    },
    todoText() {return this.inputText?.trim(); }
  },
  getTodoCount() {
    return this.todos.length > 10 ? 'many' : this.todos.length },
  todoText() {return this.inputText?.trim()},

  unmounted() {
    todoStopWatch();
  },
  mounted() {
    console.log('> App -> mounted', {dom: this.$refs.domInpit});
  },
  created() {
    const rawTodos = localStorage.getItem(LOCAL_KEY_TODOS);
    console.log('> App -> created rawTodos =', rawTodos);
    if(rawTodos){
    this.todos = JSON.parse(rawTodos);
    }
    this.inputText= JSON.parse(localStorage.getItem(LOCAL_INPUT_TEXT) || '""');

    todoStopWatch = this.$watch(() => this.todos, (value) => {
      console.log('> App -> watch: todos =', value);
      localStorage.setItem(LOCAL_KEY_TODOS, JSON.stringify(value));
    },
      {deep: true});
    this.$watch(() => this.inputText, (value) => {
        console.log('> App -> watch: inputText =', value);
        localStorage.setItem(LOCAL_INPUT_TEXT, JSON.stringify(value));
      },
      {deep: true});
  },
  methods: {
    onInputEnterKeyUp(event) {
      console.log('> APP -> onInputEnterKeyUp', this.inputText);
      this.todos.push(this.todoText);
      this.inputText = '';
    },
    deletedTodos(index) {
      console.log('> App -> deletedTodos', index);
      this.todos.splice(index, 1);
    }
  }
};
</script>

