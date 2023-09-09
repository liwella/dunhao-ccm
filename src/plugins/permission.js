import { usePermissionStore } from '@/store'
import { storeToRefs } from 'pinia'

/**
 * 判断是否有权限。根据传入的权限标识，查看是否存在于用户的权限标识集合内。
 */
export default function hasPermission(perms) {
  const permissionStore = usePermissionStore()
  const { accessPermissions } = storeToRefs(permissionStore)
  if (accessPermissions.value.includes(perms)) {
    return true
  }
  return false
}
