import { request, serviceRequest } from '@/utils'

export default {
  pageMovie: (params = {}) => serviceRequest.post('/movie/pageMovie', params),
  detail: (params = {}) => serviceRequest.post('/movie/detail', params),
  listCategory: () => serviceRequest.post('/category/listCategory'),
  getPosts: (params = {}) => request.get('posts', { params }),
  getPostById: (id) => request.get(`/post/${id}`),
  addPost: (data) => request.post('/post', data),
  updatePost: (data) => request.put(`/post/${data.id}`, data),
  deletePost: (id) => request.delete(`/post/${id}`),
}
