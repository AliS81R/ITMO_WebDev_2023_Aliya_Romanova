import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import router from "./route.js";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import AppComposition from './AppComposition.vue';

import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_SERVER_PATH);

createApp(AppComposition)
  .use(createPinia().use(piniaPluginPersistedState))
  .use(router)
  .mount('#app')
