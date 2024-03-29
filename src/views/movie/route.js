const Layout = () => import('@/layout/index.vue')

export default {
  name: 'movie',
  path: '/movie',
  component: Layout,
  meta: {
    title: '影视管理',
    icon: 'ic:baseline-album',
    order: 5,
  },
  children: [
    {
      name: 'sourceConfig',
      path: 'source-config',
      component: () => import('./source-config/index.vue'),
      meta: {
        title: '采集源管理',
        icon: 'ic:baseline-save-all',
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
        icon: 'ic:baseline-extension',
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
        icon: 'ic:baseline-article',
        role: ['admin'],
        requireAuth: true,
      },
    },
    {
      name: 'manage',
      path: 'manage',
      component: () => import('./manage/index.vue'),
      meta: {
        title: '影片管理',
        icon: 'ic:outline-duo',
        role: ['admin', 'vip', 'user', 'visitor'],
        requireAuth: true,
      },
    },
    {
      name: 'detail',
      path: 'detail/:id',
      component: () => import('./detail/index.vue'),
      meta: {
        title: '影片详情',
        icon: 'ic:baseline-camera',
        role: ['admin', 'vip', 'user', 'visitor'],
        requireAuth: true,
      },
    },
  ],
}
