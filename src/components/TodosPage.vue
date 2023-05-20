<script setup>

import TodoItem from "./TodoItem.vue";
import { parseLocalStorage, saveToLocalStorage } from "../utils/StorageUtils.js";
import { computed, onMounted, ref, watch } from "vue";
import { useTodosStore } from "../store/todosStore.js";
import { storeToRefs } from "pinia";

const LOCAL_INPUT_TEXT = 'input_Text';

const inputText = ref(parseLocalStorage((LOCAL_INPUT_TEXT),''));

const todoStore = useTodosStore();

const { todos, getTodosCount } = storeToRefs(todoStore);

const canAddItemToTheList = computed(() => true);

const getTodoText = computed(() => inputText.value?.trim());
const onInputEnterKeyUp=() => {
  console.log('> TodosPage -> onInputEnterKeyUp', getTodoText.value);
  todoStore.createTodo(getTodoText.value);
  inputText.value = '';
};
const onDeleteTodo = (index) => {
  console.log('< TodosPage -> onDeleteTodo', index);
  todoStore.deleteTodoByIndex(index);
};

watch(inputText, (v) => saveToLocalStorage(LOCAL_INPUT_TEXT, v));
onMounted(() => {
  console.log('> onMounted -> getTodosCount', getTodosCount);
})
</script>

<template>
  <input
    ref="domInput"
    v-model="inputText"
    @keyup.enter="canAddItemToTheList && onInputEnterKeyUp()"
  >
  <div>
    List: <span v-if="todos.length">{{ getTodosCount }}</span>
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


export default {
  name: "TodosPage"
};
</script>

<style scoped>

</style>