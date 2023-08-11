import { serviceRequest } from '@/utils'

export default {
  login: (data) => serviceRequest.post('/user/login', data, { noNeedToken: true }),
}
