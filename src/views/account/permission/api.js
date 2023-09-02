import { serviceRequest } from '@/utils'

export default {
  listMenu: () => serviceRequest.post('/menu/listMenu'),
  addMenu: (params = {}) => serviceRequest.post('/menu/addMenu', params),
  updateMenu: (params = {}) => serviceRequest.post('/menu/updateMenu', params),
  moveMenu: (params = {}) => serviceRequest.post('/menu/moveMenu', params),
  deleteMenu: (params = {}) => serviceRequest.post('/menu/deleteMenu', params),
}
