import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import './style.css'
import router from "./route.js";

import AppComposition from './AppComposition.vue';

createApp(AppComposition)
  .use(router)
  .mount('#app')
