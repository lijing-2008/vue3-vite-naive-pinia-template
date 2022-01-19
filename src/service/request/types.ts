/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface DDRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

interface DDRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DDRequestInterceptors<T>
}

export { DDRequestInterceptors, DDRequestConfig }
