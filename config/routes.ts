export default [
  {
    path: '/auth',
    hideInMenu: true,
    menuRender: false,
    routes: [
      {
        name: 'login',
        path: '/auth/login',
        component: './Auth/Login',
      },
      {
        name: 'register',
        path: '/auth/register',
        component: './Auth/Register',
      },
    ],
  },
  {
    path: '/',
    redirect: '/chat',
  },
  {
    path: '/chat',
    name: 'chat',
    component: './Chat',
    hideInMenu: true,
    menuRender: false,
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
]
