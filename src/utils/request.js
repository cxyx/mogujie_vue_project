import axios from "axios";

const service = axios.create({});

//请求拦截 , 对请求头进行简单配置,
service.interceptors.request.use(
  config => {
    // e.g. 在请求头中配置 token 参数 ,类似 django中的中间件
    // config.headers['token'] = 123
    return config
  }
)

//响应拦截
service.interceptors.request.use(
  response => {
  }
)

export default service