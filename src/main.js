import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import router from './route.js';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import AppComposition from './App.vue';
import PROVIDE from '@/constants/provides.js';

import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_SERVER_PATH);
console.log('pb.authStore.isValid:', pb.authStore.isValid);

createApp(AppComposition)
  .use(createPinia().use(piniaPluginPersistedState))
  .provide(PROVIDE.PB, pb)
  .use(router)
  .mount('#app');
