<script setup>

import TodoItem from "./TodoItem.vue";
import { parseLocalStorage, saveToLocalStorage } from "../utils/StorageUtils.js";

const LOCAL_KEY_TODOS = 'todos';
const LOCAL_INPUT_TEXT = 'input_Text';


const inputText = ref(parseLocalStorage((LOCAL_INPUT_TEXT),''));
const todos = ref(parseLocalStorage((LOCAL_KEY_TODOS),[]));
// console.log('todos', todos.value);

const canAddItemToTheList = computed(() => true);
const getTodoCount = computed(() => todos.value?.length)
const todoText = computed(() => inputText.value?.trim());
const onInputEnterKeyUp=() => {
console.log('> TodosPage -> onInputEnterKeyUp', todoText.value);
todos.value.push(todoText.value);
inputText.value = '';
};
const onDeleteTodo = (index) => {
console.log('< TodosPage -> onDeleteTodo');
todos.value.splice(index, 1);
};


watch(inputText, (v) => saveToLocalStorage(LOCAL_INPUT_TEXT, v));
watch(todos, (v) => saveToLocalStorage(LOCAL_KEY_TODOS, v), {deep: true});

</script>

<template>
  <input
    ref="domInput"
    v-model="inputText"
    @keyup.enter="canAddItemToTheList && onInputEnterKeyUp()"
  >
  <div>
    List: <span v-if="todos.length">{{ getTodoCount }}</span>
    <span v-else>empty</span>
    <template
      v-for="(value, index) in todos"
      :key="value"
    >
      <TodoItem
        :index="index + 1"
        :text="value"
        @delete="onDeleteTodo(index)"
      />
    </template>
  </div>
</template>






<script>
import { computed, ref, watch } from "vue";

export default {
  name: "TodosPage"
};
</script>

<style scoped>

</style>