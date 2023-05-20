import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import router from "./route.js";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import AppComposition from './AppComposition.vue';



createApp(AppComposition)
  .use(createPinia().use(piniaPluginPersistedState))
  .use(router)
  .mount('#app')
