import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import router from "./route.js";

import AppComposition from './AppComposition.vue';



createApp(AppComposition)
  .use(createPinia())
  .use(router)
  .mount('#app')
