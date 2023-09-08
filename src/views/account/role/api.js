import { serviceRequest } from '@/utils'

export default {
  listRole: () => serviceRequest.post('/role/listRole'),
  addRole: (params = {}) => serviceRequest.post('/role/addRole', params),
  updateRole: (params = {}) => serviceRequest.post('/role/updateRole', params),
  deleteRole: (params = {}) => serviceRequest.post('/role/deleteRole', params),
  listMenu: () => serviceRequest.post('/menu/listMenu'),
  listCategory: () => serviceRequest.post('/category/listCategory'),
  listRoleMenu: (params = {}) => serviceRequest.post('/roleMenu/listRoleMenu', params),
  updateRoleMenu: (params = {}) => serviceRequest.post('/roleMenu/updateRoleMenu', params),
  listRoleCategory: (params = {}) => serviceRequest.post('/roleCategory/listRoleCategory', params),
  updateRoleCategory: (params = {}) =>
    serviceRequest.post('/roleCategory/updateRoleCategory', params),
}
