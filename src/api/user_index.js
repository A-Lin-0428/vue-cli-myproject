// 引入myaxios
import axios from '@/utils/myaxios.js'
// 登录
export const login = (data) => {
  return axios({
    //   请求路由路径
    url: 'login',
    // 请求方式：默认为get
    method: 'post',
    // post方式传递的数据
    data
  })
}
// 获取用户数据
export const getAllUserList = (params) => {
  return axios({
    url: 'users',
    params
  })
}
