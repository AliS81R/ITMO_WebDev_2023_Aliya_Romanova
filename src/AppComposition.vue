<script setup>

import TodoItem from "../TodoItem.vue";
import AppHeader from "./components/AppHeader.vue";
import { computed, onMounted, ref, watch } from "vue";

const LOCAL_KEY_TODOS = 'todos';
const LOCAL_INPUT_TEXT = 'input_Text';

const parseLocalStorage = (key, alt) => JSON.parse(localStorage.getItem(key) || JSON.stringify(alt));

const user = ref({name: 'AliS'});
const inputText = ref(parseLocalStorage((LOCAL_INPUT_TEXT),''));
const todos = ref(parseLocalStorage((LOCAL_KEY_TODOS),[]));
// console.log('todos', todos.value);
const canAddItemToTheList = computed(() => true);
const getTodoCount = computed(() => todos.value?.length)
const todoText = computed(() => inputText.value?.trim());
const onInputEnterKeyUp=() => {
  console.log('> APP -> onInputEnterKeyUp', todoText.value);
  todos.value.push(todoText.value);
  inputText.value = '';
};

const onDeleteTodo = (index) => {
  console.log('< App -> onDeleteTodo');
  todos.value.splice(index, 1);
};

const saveToLocalStorage = (key, value) => {
  console.log('> saveToLocalStorage');
  localStorage.setItem(key, JSON.stringify(value));
}

watch(inputText, (v) => saveToLocalStorage(LOCAL_INPUT_TEXT, v));
watch(todos, (v) => saveToLocalStorage(LOCAL_KEY_TODOS, v), {deep: true});

onMounted((value) => {
  console.log('> App -> onMounted');
});

</script>

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
      @delete="onDeleteTodo(index)"
    />
  </div>
</template> 


