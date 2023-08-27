import { serviceRequest } from '@/utils'

export default {
  listMenu: () => serviceRequest.post('/menu/listMenu'),
  addMenu: (params = {}) => serviceRequest.post('/menu/addMenu', params),
  updateMenu: (params = {}) => serviceRequest.post('/menu/updateMenu', params),
  deleteMenu: (params = {}) => serviceRequest.post('/menu/deleteMenu', params),
}
