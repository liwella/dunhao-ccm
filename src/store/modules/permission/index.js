import { defineStore } from 'pinia'
import { asyncRoutes, basicRoutes } from '@/router/routes'

function hasPermission(route, role) {
  // * 不需要权限直接返回true
  if (!route.meta?.requireAuth) return true

  const routeRole = route.meta?.role ? route.meta.role : []

  // * 登录用户没有角色或者路由没有设置角色判定为没有权限
  if (!role.length || !routeRole.length) return false

  // * 路由指定的角色包含任一登录用户角色则判定有权限
  return role.some((item) => routeRole.includes(item))
}

function filterAsyncRoutes(routes = [], role) {
  const ret = []
  routes.forEach((route) => {
    if (hasPermission(route, role)) {
      const curRoute = {
        ...route,
        children: [],
      }
      if (route.children && route.children.length) {
        curRoute.children = filterAsyncRoutes(route.children, role)
      } else {
        Reflect.deleteProperty(curRoute, 'children')
      }
      ret.push(curRoute)
    }
  })
  return ret
}

// function transferMenuToRoutes(menus = []) {
//   const ret = []
//   menus.forEach((menu) => {
//     const { menuName, url, permission, type, icon, children } = menu
//     if (type.value === 3) {
//       return
//     }
//     const curRoute = {
//       name: permission,
//       path: url,
//       component: getComponent(url, type),
//       meta: {
//         title: menuName,
//         icon: icon,
//         requireAuth: true,
//       },
//       children: children?.length !== 0 ? transferMenuToRoutes(children) : [],
//     }
//     ret.push(curRoute)
//   })
//   return ret
// }

// function transferMenuToRoutes(menus = []) {
//   const ret = []
//   menus.forEach((menu) => {
//     const { menuName, url, permission, level, type, icon, children } = menu
//     if (type.value === 3) {
//       return
//     }
//     const curRoute = new Object()
//     if (level === 0 && type.value === 1) {
//       curRoute.name = permission
//       curRoute.path = url
//       curRoute.component = () => import('@/layout/index.vue')
//       curRoute.redirect = url + '/work'
//       const child = {}
//       child.name = permission + '.work'
//       child.url = 'work'
//       child.component = getComponent(url, type)
//       const meta = {}
//       meta.title = menuName
//       meta.icon = icon
//       meta.order = 0
//       child.meta = meta
//       curRoute.children = [child]
//     } else {
//       curRoute.name = permission
//       curRoute.path = url
//       curRoute.component = getComponent(url, type)
//       const meta = {}
//       meta.title = menuName
//       meta.icon = icon
//       meta.requireAuth = true
//       curRoute.meta = meta
//       curRoute.children = children?.length !== 0 ? transferMenuToRoutes(children) : []
//     }
//     ret.push(curRoute)
//   })
//   return ret
// }

// function getComponent(url, type) {
//   if (type.value === 2) {
//     return () => import('@/layout/index.vue')
//   } else if (type.value === 1) {
//     return () => defineAsyncComponent(() => import(/* @vite-ignore */ `@/views${url}/index.vue`))
//   }
// }

export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      accessRoutes: [],
    }
  },
  getters: {
    routes() {
      return basicRoutes.concat(this.accessRoutes)
    },
    menus() {
      return this.routes.filter((route) => route.name && !route.isHidden)
    },
  },
  actions: {
    generateRoutes(role = []) {
      const accessRoutes = filterAsyncRoutes(asyncRoutes, role)
      this.accessRoutes = accessRoutes
      return accessRoutes
    },
    resetPermission() {
      this.$reset()
    },
  },
})
