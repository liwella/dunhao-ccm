import { serviceRequest } from '@/utils'

export default {
  listCategory: () => serviceRequest.post('/category/listCategory'),
  listSourceCategory: (params = {}) => serviceRequest.post('/source/listSourceCategory', params),
  listCategoryMapping: (params = {}) =>
    serviceRequest.post('/categoryMapping/listCategoryMapping', params),
  listSimpleSc: () => serviceRequest.post('/sourceConfig/listSimpleSc'),
  addOrUpdate: (params = {}) => serviceRequest.post('/categoryMapping/addOrUpdate', params),
  deleteMapping: (params = {}) => serviceRequest.post('/categoryMapping/delete', params),
}
