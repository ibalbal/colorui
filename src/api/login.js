import request from '@/http/request'
const scope = 'server'
//
export const loginByUsername = (username, password, code, randomStr) => {
  const grant_type = 'password';
  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken:false,
      'Authorization': 'Basic bWluOm1pbg=='
    },
    method: 'post',
    params: { username, password, randomStr, code, grant_type, scope }
  })
}

export const refreshToken = (refresh_token) => {
  const grant_type = 'refresh_token';
  return request({
    url: '/auth/oauth/token',
    headers: {
      'isToken': false,
      'Authorization': 'Basic bWluOm1pbg==',
    },
    method: 'post',
    params: { refresh_token, grant_type, scope }
  })
}

export const getUserInfo = () => {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}

export const logout = () => {
  return request({
    url: '/auth/token/logout',
    method: 'delete'
  })
}
