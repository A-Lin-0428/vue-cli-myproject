// 引入axios
import axios from 'axios'
// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 暴露axios
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config)
    // 必须在请求头中使用 Authorization 字段提供 token 令牌，这句话的意思是：我们必须通过请求头的方式来设置token的数据传递，
    // 并且它的键只能是Authorization
    config.headers['Authorization'] = localStorage.getItem('vue_cli_myproject')
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})
export default axios
