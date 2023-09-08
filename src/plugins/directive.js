import { usePermissionStore } from '@/store'
import { storeToRefs } from 'pinia'

export default {
  install: (app) => {
    app.directive('permission', (el, binding) => {
      const permissionStore = usePermissionStore()
      const { value } = binding
      const { accessPermissions } = storeToRefs(permissionStore)
      // const accessRoutes = ['deleteMovie']
      if (!accessPermissions.value.includes(value)) {
        if (el.parentNode) {
          el.parentNode.removeChild(el)
        } else {
          el.style.display = 'none'
        }
      }
    })
  },
}
