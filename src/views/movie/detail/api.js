import { serviceRequest } from '@/utils'

export default {
  getPlaylist: (params = {}) => serviceRequest.post('/playlist/getPlaylist', params),
}
