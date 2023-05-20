import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "./store/userStore.js";

const PAGE_NAME__SIGN_IN = 'siginPage';
const PAGE_URL__SIGN_IN = '/signin';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import("./components/IndexPage.vue")
    },
    {
      path: '/todos',
      component: () => import("./components/TodosPage.vue")
    },
    {
      path: '/todos/:id',
      component: () => import("./components/TodoEditPage.vue")
    },
    {
      name: PAGE_NAME__SIGN_IN,
      path: PAGE_URL__SIGN_IN,
      component: () => import("./components/SiginPage.vue")
    }
  ],
});

router.beforeEach((to, from, next) => {
  console.log('> router -> beforeEach', to.path);
  const publicPages = ['/', PAGE_URL__SIGN_IN];
  const notAllowedNavigation = !publicPages.includes(to.path) && !useUserStore().hasUser;
  if (notAllowedNavigation) next({ name: PAGE_NAME__SIGN_IN });
  else next();
});

export default router;
