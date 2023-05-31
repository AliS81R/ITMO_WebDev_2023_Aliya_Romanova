const ROUTES = {
  INDEX: '/',
  TODOS: '/todos',
  TODOS_ID: '/todos/:id',
  SIGIN: '/sigin',
  SIGUP: '/singup',

};

const PUBLIC_PAGES = [
  ROUTES.INDEX, 
  ROUTES.SIGIN, 
  ROUTES.SIGUP
];


export {PUBLIC_PAGES};
export default ROUTES;