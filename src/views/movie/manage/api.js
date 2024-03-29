import { serviceRequest } from '@/utils'

export default {
  pageMovie: (params = {}) => serviceRequest.post('/movie/pageMovie', params),
  detail: (params = {}) => serviceRequest.post('/movie/detail', params),
  addOrUpdate: (params = {}) => serviceRequest.post('/movie/addOrUpdate', params),
  deleteMovie: (params = {}) => serviceRequest.post('/movie/deleteMovie', params),
  listUserCategory: () => serviceRequest.post('/category/listUserCategory'),
  listArea: () => serviceRequest.post('/movie/listArea'),
}
