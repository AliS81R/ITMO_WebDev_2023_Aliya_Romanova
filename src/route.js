import { createRouter, createWebHashHistory } from 'vue-router';
import { useUserStore } from './store/userStore.js';
import ROUTES, { PUBLIC_PAGES } from './constants/routes.js';
import { inject } from 'vue';
import PROVIDE from '@/constants/provides.js';


const PAGE_NAME__SIGN_IN = 'sigInPage';
// const PAGE_URL__SIGN_IN = '/sigin';

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
      component: () => import('./pages/SigInPage.vue')
    },
    {path: ROUTES.SIGUP,
      component: () => import('./pages/SignUpPage.vue')
    }
  ]
});

router.beforeEach((to, next) => {
  console.log('> router -> beforeEach', to.path);
  const pb = inject(PROVIDE.PB);
  console.log('pb.authStore', pb.authStore);
  const notAllowedNavigation =
PUBLIC_PAGES.indexOf(to.path) < 0
    && !pb.authStore.model?.id;

  console.log('>router -> beforeEach', to.path, {notAllowedNavigation});

  if (notAllowedNavigation)
    next({ path: ROUTES.SIGIN});
  else next();
});

export default router;
