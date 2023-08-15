import { serviceRequest } from '@/utils'

export default {
  listCategory: () => serviceRequest.post('/category/listCategory'),
  addCategory: (params = {}) => serviceRequest.post('/category/addCategory', params),
  deleteCategory: (params = {}) => serviceRequest.post('/category/deleteCategory', params),
}
