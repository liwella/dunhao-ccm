import { request, serviceRequest } from '@/utils'

export default {
  getUser: () => request.post('/user/getUser'),
  listMenu: () => request.post('/menu/listMenu'),
  refreshToken: () => request.post('/user/refreshToken', null, { noNeedTip: true }),
}
