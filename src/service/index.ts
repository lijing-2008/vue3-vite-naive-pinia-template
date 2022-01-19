import { localCache } from '@/utils/cache'
import DDRequest from './request/request'

const ddRequest = new DDRequest({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: import.meta.env.VITE_APP_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getItem('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default ddRequest
