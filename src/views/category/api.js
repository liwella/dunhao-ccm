import { serviceRequest } from '@/utils'

export default {
  listCategory: () => serviceRequest.post('/category/listCategory'),
}
