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
    hideInMenu: true,
    menuRender: false,
    routes: [
      { path: '/chat', component: './Chat/List' },
      { path: '/chat/:id', component: './Chat/Detail' },
    ],
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
]
