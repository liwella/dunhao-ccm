const Layout = () => import('@/layout/index.vue')

export default {
  name: 'cinema',
  path: '/cinema',
  component: Layout,
  meta: {
    title: '影视管理',
    icon: 'ic:baseline-album',
    role: ['admin'],
    requireAuth: true,
    order: 5,
  },
  children: [
    {
      name: 'sourceConfig',
      path: 'collect-config',
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
      name: 'movie',
      path: 'movie',
      component: () => import('./manage/index.vue'),
      meta: {
        title: '影片管理',
        icon: 'ic:outline-duo',
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
        icon: 'ic:baseline-camera',
        role: ['admin'],
        requireAuth: true,
      },
    },
  ],
}
