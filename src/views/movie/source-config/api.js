import { serviceRequest } from '@/utils'

export default {
  list: () => serviceRequest.post('/sourceConfig/list'),
  add: (params = {}) => serviceRequest.post('/sourceConfig/add', params),
  update: (params = {}) => serviceRequest.post('/sourceConfig/update', params),
  delete: (params = {}) => serviceRequest.post('/sourceConfig/delete', params),
}
