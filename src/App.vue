
<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { computed, inject, onMounted, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/userStore.js';
import PROVIDE from '@/constants/provides.js';
import ROUTES from '@/constants/routes.js';
import { useRoute } from 'vue-router';
import AppMenu from '@/components/AppMenu.vue';


const pb = inject(PROVIDE.PB);
const hasUser = computed(()=> pb.authStore.isValid);
const {user} = storeToRefs(useUserStore());

const route = useRoute();

const checkRouteIsNotCurrent =(routePath) => useRoute().path !== routePath;

const menuLinks = reactive([
  { name: 'Index', link: ROUTES.INDEX, canRender: computed(() =>  !hasUser.value && checkRouteIsNotCurrent(ROUTE_INDEX))},
  { name: 'Todos', link: ROUTES.TODOS, canRender: computed(() => hasUser.value && checkRouteIsNotCurrent(ROUTE_TODOS))},
  { name: 'Sign In', link: ROUTES.SIGNIN, canRender: computed(() =>  !hasUser.value && checkRouteIsNotCurrent(ROUTE_SIGNIN)) },
]);

</script>
<template>
  <AppHeader>
    Todo App
    <template #sub-header>
      <span v-if="hasUser">created by {{ user.name }}</span>
      <span v-else>noname</span>
    </template>
  </AppHeader>
  <AppMenu
    style="margin: 2rem 0;"
    :links="menuLinks"
  />
  <router-view />
</template> 


