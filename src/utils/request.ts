import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue';
import i18n from '@/lang';
import { v4 as uuidv4 } from 'uuid';
import qs from 'qs'


const { t } = i18n.global





//http 响应头
enum HttpCode {
  SUCCESS = 200, //成功
  FAIL = 500, //失败
  AUTHORIZATION_FAIL = 401, //授权失败
  REDIRECT_TEMPORARILY = 302, //重定向(临时)
  REDIRECT_PERMANENTLY = 301, //重定向(永久)
  NOT_FOUND = 404, //404
  FORBIDDEN = 403, //禁止访问
};

const loginUrl = import.meta.env.VITE_LOGIN_PATH || ''



const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: import.meta.env.VITE_API_TIMEOUT || 0,
  headers: {
    'X-Request-Id': uuidv4(),
    'X-Request-Time': new Date().getTime().toString(),
  }
});


// 添加请求拦截器
instance.interceptors.request.use(function (config: AxiosRequestConfig) {
  return config;
}, function (error: AxiosError) {
  return Promise.reject(error);
});


// 添加响应拦截器
instance.interceptors.response.use(function (response: AxiosResponse) {
  return response.data;
}, function (error: AxiosError<Request.Result<any>>) {
  if (false === window.navigator.onLine) {
    message.warning(t('网络丢失,联网后再试...'));
    return
  }

  if (error.response) {
    switch (error.response.status) {
      case 301:
      case 302:
        window.location.href = error.response.data.data as string;
        break;
      case 401:
        window.location.href = loginUrl
        break;
      case 403:
        message.warning(t('禁止访问'));
        break;
      case 500:
      default:
        message.warning(error.response.data.message ? error.response.data.message : t('未知错误,稍后再试...'));
        break;
    }
  }

  return Promise.reject(error);
});



export  default  {
  async get<T>(data: Request.RequestParam<T>, config?: AxiosRequestConfig): Promise<Request.Result<any>> {
    const queryStr = qs.stringify(data.params)
    const url = queryStr ? data.path + "?" + queryStr : data.path
    return await instance.get(url,config)
  },

  async post<T>(data: Request.RequestParam<T>, config?: AxiosRequestConfig): Promise<Request.Result<any>> {
    const queryStr = qs.stringify(data.params)
    const url = queryStr ? data.path + "?" + queryStr : data.path
    return await instance.post(url,data.data,config)
  }
}



