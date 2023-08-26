import { request, serviceRequest } from '@/utils'

export default {
  getLoginUser: () => serviceRequest.post('/user/getLoginUser'),
  listMenu: () => serviceRequest.post('/menu/listMenu'),
  refreshToken: () => request.post('/user/refreshToken', null, { noNeedTip: true }),
}
