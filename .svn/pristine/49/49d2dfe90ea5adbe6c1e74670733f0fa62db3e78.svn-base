import axios from 'axios'
import store from '../store/store'
const SERVICE = {
  taobao: 'http://rap2api.taobao.org/app/mock/10580',
  service2: 'http://rap2api.taobao.org/app/mock/115893'
}

const requestType = {
  get: function(requestParams) {
    return {
      params: requestParams,
      method: 'get'
    }
  },

  post: function(requestBody) {
    return {
      data: requestBody,
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }
  },
  form: function(requestBody) {
    return {
      data: requestBody,
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  }
  /*file: function(requestBody) {
    return {
      data: requestBody,
      method: 'post',
      headers: {
        //'content-type': 'application/x-www-form-urlencoded'
      }
    }
  }*/
}

/*公共配置*/
let mainConfig = {
  timeout: 6000,
  //production需要修改为false
  withCredentials: false,
  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function(status) {
    return status >= 200 && status < 400
  }
}

function interceptor({ self }) {
  axios.interceptors.request.use(
    function(config) {
      store.commit('SET_MESSAGE', { isHas: false, false: 'info' })
      return config
    },
    function(error) {
      self.$message.warn('客户端错误，请检查网络连接')
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    function(response) {
      //登陆状态，请求头里
      // if(response.data.info.seed){
      //   window.location.href='/login'
      // }
      return response.data
    },
    function(error) {
      //请求超时，在这进行操作
      self.$message.error('服务器繁忙，请稍后再试')
      let errermsg = JSON.stringify(error)
      if (errermsg.indexOf('timeout')) {
        store.commit('SET_MESSAGE', { isHas: true, type: 'info' })
      }
      return Promise.reject(error)
    }
  )
}

export default {
  install(Vue, options) {
    Vue.prototype.$request = {
      get: function({ self, url, params, serve, expand = {} }) {
        let baseUri = {
          url: SERVICE[serve] + url
        }
        let req = requestType.get(params)
        let specific = Object.assign({}, baseUri, req, mainConfig, expand)
        interceptor(self)
        return axios(specific).then(res => {
          return res && res
        })
      },
      post: function({ self, url, params, serve, expand = {} }) {
        let baseUri = {
          url: SERVICE[serve] + url
        }
        let req = requestType.post(params)
        let specific = Object.assign({}, baseUri, req, mainConfig, expand)
        interceptor(self)
        return axios(specific).then(res => {
          return res && res
        })
      },
      form: function({ self, url, params, serve, expand = {} }) {
        let baseUri = {
          url: SERVICE[serve] + url
        }
        let req = requestType.form(params)
        let specific = Object.assign({}, baseUri, req, mainConfig, expand)
        interceptor(self)
        return axios(specific).then(res => {
          return res && res
        })
      }
      /*file: function(self,
          url,
          params,
          serve,
          expand = {}) {
          let baseUri = {
            url: SERVICE[serve] + url
          }
          let req = requestType.post(params)
          let specific = Object.assign({}, baseUri, req, mainConfig, expand)
          interceptor(self)
          return axios(specific).then(res => {
            return res && res
          })
        }*/
    }
  }
}
