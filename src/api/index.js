import { request, serviceRequest } from '@/utils'

export default {
  getUser: () => request.get('/user'),
  listMenu: () => serviceRequest.post('/menu/listMenu'),
  refreshToken: () => request.post('/user/refreshToken', null, { noNeedTip: true }),
}
