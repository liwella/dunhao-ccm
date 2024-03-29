export const OUTPUT_DIR = 'dist/ccm'

export const PROXY_CONFIG = {
  development: {
    /**
     * @desc    替换匹配值
     * @请求路径  http://localhost:3100/api/user
     * @转发路径  http://localhost:8080/user
     */
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp('^/api'), ''),
    },
    /**
     * @desc    不替换匹配值
     * @请求路径  http://localhost:3100/api/v2/user
     * @转发路径  http://localhost:8080/api/v2/user
     */
    '/dunhao': {
      target: 'http://localhost:9000',
      changeOrigin: true,
    },
    /**
     * @desc    替换部分匹配值
     * @请求路径  http://localhost:3100/api/v3/user
     * @转发路径  http://localhost:8080/user
     */
    '/api/v3': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp('^/api'), ''),
    },
  },
  production: {
    '/api': {
      target: 'http://1.12.233.74:8080',
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp('^/api'), ''),
    },
    '/dunhao': {
      target: 'http://1.12.233.74:9000',
      changeOrigin: true,
    },
    '/api/v3': {
      target: 'http://1.12.233.74:8080',
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp('^/api'), ''),
    },
  },
}
