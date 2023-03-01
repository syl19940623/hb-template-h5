import axios from "axios";
import store from '../store';

const instance = axios.create({
  // 接口地址根路径
  baseURL: '/template_api',
  timeout: 60000
})

//请求前拦截
instance.interceptors.request.use(config => {
  const saveAuthorization = store.state.token
  if (saveAuthorization) {
    config.headers.common['authorization'] = saveAuthorization
  }
  return config;
}, error => {
  
})

//请求后拦截
instance.interceptors.response.use(res => {
  const responseHeaderToken = res.headers.refresh_token
  if (responseHeaderToken) {
    store.commit('saveToken', responseHeaderToken)
  }
  return res.data;
}, error => {
  
})

export function get(url, params, headers) {
  const config = {}
  if (params) {
    config.params = params;
  }
  if (headers) {
    config.headers = headers;
  }
  return instance.get(url, config)
}

export function post(url, data, headers) {
  const config = {}
  if (headers) {
    config.headers = headers;
  }
  return instance.post(url, data, config)
}
