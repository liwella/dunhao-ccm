import { serviceRequest } from '@/utils'

export default {
  listCategory: () => serviceRequest.post('/category/listCategory'),
  addCategory: (params = {}) => serviceRequest.post('/category/addCategory', params),
  updateCategory: (params = {}) => serviceRequest.post('/category/updateCategory', params),
  moveCategory: (params = {}) => serviceRequest.post('/category/moveCategory', params),
  deleteCategory: (params = {}) => serviceRequest.post('/category/deleteCategory', params),
}
