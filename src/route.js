import { createRouter, createWebHashHistory } from 'vue-router';
import { useUserStore } from './store/userStore.js';
import ROUTES from './constants/routes.js';
import { inject } from 'vue';
import PROVIDE from '@/constants/provides.js';

const PAGE_NAME__SIGN_IN = 'siginPage';
const PAGE_URL__SIGN_IN = '/sigin';

let router;
router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: ROUTES.INDEX,
      component: () => import('./pages/IndexPage.vue')
    },
    {
      path: ROUTES.TODOS,
      component: () => import('./pages/todos/TodosPage.vue')
    },
    {
      path: ROUTES.TODOS_ID,
      component: () => import('./pages/todos/TodoEditPage.vue')
    },
    {
      path: ROUTES.SIGIN,
      component: () => import('./pages/SiginPage.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log('> router -> beforeEach', to.path);
  const publicPages = [ROUTES.INDEX, ROUTES.SIGIN];
  const pb = inject(PROVIDE_PB);
  const notAllowedNavigation =
    publicPages.indexOf(to.path) < 0
    && !pb.authStore.isValid;

  console.log('>router -> beforeEach', to.path, {notAllowedNavigation});

  if (notAllowedNavigation)
    next({ path: ROUTES.SIGIN});
  else next();
});

export default router;
