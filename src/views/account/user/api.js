import { serviceRequest } from '@/utils'

export default {
  pageUser: (params = {}) => serviceRequest.post('/user/pageUser', params),
  listRole: () => serviceRequest.post('/role/listRole'),
  getUser: (params = {}) => serviceRequest.post('/user/getUser', params),
  updateUser: (params = {}) => serviceRequest.post('/user/updateUser', params),
  addUser: (params = {}) => serviceRequest.post('/user/addUser', params),
  deleteUser: (params = {}) => serviceRequest.post('/user/deleteUser', params),
}
