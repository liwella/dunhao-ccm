import { usePermissionStore } from '@/store'
import { storeToRefs } from 'pinia'

export default {
  install: (app) => {
    app.directive('permission', (el, binding) => {
      // const permissionStore = usePermissionStore()
      const { value } = binding
      // const { accessRoutes } = storeToRefs(permissionStore)
      const accessRoutes = ['deleteMovie']
      if (!accessRoutes.includes(value)) {
        if (el.parentNode) {
          el.parentNode.removeChild(el)
        } else {
          el.style.display = 'none'
        }
      }
    })
  },
}
