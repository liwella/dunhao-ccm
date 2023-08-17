const Layout = () => import('@/layout/index.vue')

export default {
  name: 'cinema',
  path: '/cinema',
  component: Layout,
  meta: {
    title: '影视管理',
    icon: 'mdi:home',
    role: ['admin'],
    requireAuth: true,
    order: 5,
  },
  children: [
    {
      name: 'movie',
      path: 'movie',
      component: () => import('./manage/index.vue'),
      meta: {
        title: '影片管理',
        icon: 'ic:baseline-menu',
        role: ['admin'],
        requireAuth: true,
      },
    },
    {
      name: 'collectTask',
      path: 'collect-task',
      component: () => import('./collect-task/index.vue'),
      meta: {
        title: '采集管理',
        icon: 'ic:baseline-menu',
        role: ['admin'],
        requireAuth: true,
      },
    },
    {
      name: 'mapping',
      path: 'mapping',
      component: () => import('./mapping/index.vue'),
      meta: {
        title: '映射管理',
        icon: 'ic:baseline-menu',
        role: ['admin'],
        requireAuth: true,
      },
    },
    {
      name: 'detail',
      path: 'detail/:id',
      component: () => import('./detail/index.vue'),
      meta: {
        title: '影片详情',
        icon: 'ic:baseline-menu',
        role: ['admin'],
        requireAuth: true,
      },
    },
  ],
}
