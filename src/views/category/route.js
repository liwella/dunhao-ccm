const Layout = () => import('@/layout/index.vue')

export default {
  name: 'category',
  path: '/category',
  component: Layout,
  redirect: '/category/work',
  meta: {
    role: ['admin'],
    requireAuth: true,
    order: 6,
  },
  children: [
    {
      name: 'work',
      path: 'work',
      component: () => import('./index.vue'),
      meta: {
        title: '分类管理',
        icon: 'ic:baseline-menu',
      },
    },
  ],
}
