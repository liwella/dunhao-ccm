import { serviceRequest } from '@/utils'

export default {
  listRole: () => serviceRequest.post('/role/listRole'),
  addRole: (params = {}) => serviceRequest.post('/role/addRole', params),
  updateRole: (params = {}) => serviceRequest.post('/role/updateRole', params),
  deleteRole: (params = {}) => serviceRequest.post('/role/deleteRole', params),
}
