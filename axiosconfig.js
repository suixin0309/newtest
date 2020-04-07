import axios from 'axios'

/* 常量 */
const SERVICE = {
  service1: 'http://rap2api.taobao.org/app/mock/10580',
  service2: 'http://rap2api.taobao.org/app/mock/115893'
}

const requestType = {
  get:function (requestParams) {
    return {
      params: requestParams,
      method:"get"
    }
  },
  
  post:function (requestBody) {
    return {
      data: requestBody,
      method:"post"
    }
  }
}


/*公共配置*/
let mainConfig= {
    timeout: 8000,
    //production需要修改为false
    withCredentials: true,
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function(status) {
      //需要考虑到304
      return status >= 200 && status < 400 // 默认的
    }
    /*proxy: {
      host: '127.0.0.1',
      port: 9000,
      auth: {
        username: 'mikeymike',
        password: 'rapunz3l'
      }
    }*/
}
//如有全局请求或相应拦截需求，在这里添加处理方法

axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    console.log("请求拦截")
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    console.log("响应拦截")
    return response
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)


/**
 *
 *发请求的模块
 * @param {*} url 请求路径
 * @param {string} [method='get'] get or post
 * @param {*} params get或post的内容
 * @param {*} num 服务所在的模块（例如：intanceService,kettleService）
 * @param {*} [expand={}] 除目前默认配置以外的其他扩展配置可以直接添加对象，与已有属性相同时会以新的替换掉旧的
 * @returns axios的调用
 */
function request(url, method = 'get', params, num,expand = {}) {
  let req = requestType[method](params)
  let baseUri = {
    url: SERVICE[num]+url
  }
  let specific = Object.assign({},req,baseUri,mainConfig,expand)
  return axios(specific);
}

export default request
  

