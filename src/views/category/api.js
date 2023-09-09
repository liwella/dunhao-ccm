import { serviceRequest } from '@/utils'

export default {
  listUserCategory: () => serviceRequest.post('/category/listUserCategory'),
  addCategory: (params = {}) => serviceRequest.post('/category/addCategory', params),
  updateCategory: (params = {}) => serviceRequest.post('/category/updateCategory', params),
  moveCategory: (params = {}) => serviceRequest.post('/category/moveCategory', params),
  deleteCategory: (params = {}) => serviceRequest.post('/category/deleteCategory', params),
}
