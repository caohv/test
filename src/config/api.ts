import { APP_API_URL, APP_OPENAI_API_KEY } from '@/utils'
import request, { extend } from 'umi-request'

request.interceptors.request.use(
  (url, options) => {
    return {
      url: `${APP_API_URL}${url}`,
      options: {
        ...options,
        interceptors: true,
        headers: {
          ...options.headers,
          authorization: `Bearer ${APP_OPENAI_API_KEY}`,
        },
      },
    }
  },
  { global: true }
)

export const api = extend({
  timeout: 100000,
  useCache: false,
})
