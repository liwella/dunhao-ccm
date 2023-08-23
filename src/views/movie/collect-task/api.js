import { serviceRequest } from '@/utils'

export default {
  pageCollectTask: (params = {}) => serviceRequest.post('/collectTask/pageCollectTask', params),
  addCollectTask: (params = {}) => serviceRequest.post('/collectTask/addCollectTask', params),
  startCollectTask: (params = {}) => serviceRequest.post('/collectTask/startCollectTask', params),
  pauseTask: (params = {}) => serviceRequest.post('/collectTask/pauseCollectTask', params),
  stopTask: (params = {}) => serviceRequest.post('/collectTask/stopCollectTask', params),
  listCollectTaskState: () => serviceRequest.post('/collectTask/listCollectTaskState'),
  getTaskProcess: (params = {}) => serviceRequest.post('/collectTask/getTaskProcess', params),
  listSimpleSc: () => serviceRequest.post('/sourceConfig/listSimpleSc'),
}
