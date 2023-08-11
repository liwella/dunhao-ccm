import { request, serviceRequest } from '@/utils'

export default {
  getUser: () => serviceRequest.post('/user/getUser'),
  listMenu: () => serviceRequest.post('/menu/listMenu'),
  refreshToken: () => request.post('/user/refreshToken', null, { noNeedTip: true }),
}
