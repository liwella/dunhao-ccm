import { serviceRequest } from '@/utils'

export default {
  listCategory: () => serviceRequest.post('/category/listCategory'),
  listSourceCategory: (params = {}) => serviceRequest.post('/source/listSourceCategory', params),
  listSimpleSc: () => serviceRequest.post('/sourceConfig/listSimpleSc'),
  addOrUpdate: (params = {}) => serviceRequest.post('/categoryMapping/addOrUpdate', params),
}
