import { request, serviceRequest } from '@/utils'

export default {
  getLoginUser: () => serviceRequest.post('/user/getLoginUser'),
  listUserMenu: () => serviceRequest.post('/menu/listUserMenu'),
  refreshToken: () => request.post('/user/refreshToken', null, { noNeedTip: true }),
}
