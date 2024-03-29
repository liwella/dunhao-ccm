const Layout = () => import('@/layout/index.vue')

export default {
  name: 'account',
  path: '/account',
  component: Layout,
  meta: {
    title: '账户管理',
    icon: 'ic:baseline-how-to-reg',
    role: ['admin'],
    requireAuth: true,
    order: 7,
  },
  children: [
    {
      name: 'user',
      path: 'user',
      component: () => import('./user/index.vue'),
      meta: {
        title: '用户管理',
        icon: 'ic:outline-how-to-reg',
        role: ['admin'],
        requireAuth: true,
      },
    },
    {
      name: 'role',
      path: 'role',
      component: () => import('./role/index.vue'),
      meta: {
        title: '角色管理',
        icon: 'ic:outline-insert-emoticon',
        role: ['admin'],
        requireAuth: true,
      },
    },
    {
      name: 'permission',
      path: 'permission',
      component: () => import('./permission/index.vue'),
      meta: {
        title: '菜单管理',
        icon: 'ic:sharp-attachment',
        role: ['admin'],
        requireAuth: true,
      },
    },
  ],
}
