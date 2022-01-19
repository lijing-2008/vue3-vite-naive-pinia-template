import axios, { AxiosInstance } from 'axios'
import { DDRequestConfig, DDRequestInterceptors } from './types'

class DDRequest {
  instance: AxiosInstance
  interceptors?: DDRequestInterceptors

  constructor(config: DDRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        console.log('全局请求失败拦截', err)
      }
    )
    // 全局失败拦截
    this.instance.interceptors.response.use(
      (res) => {
        // 返回数据仅保留data部分
        return res.data
      },
      (err) => {
        console.log('全局响应失败拦截', err)
      }
    )
    // 实例级别拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request<T>(config: DDRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      //请求拦截位置
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 响应拦截位置
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }
  post<T>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }
  delete<T>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    })
  }
  patch<T>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    })
  }
}

export default DDRequest
