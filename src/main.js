import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import router from "./route.js";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import AppComposition from './AppComposition.vue';

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

createApp(AppComposition)
  .use(createPinia().use(piniaPluginPersistedState))
  .use(router)
  .mount('#app')
