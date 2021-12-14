const getters = {
  userInfo: state => state.user.userInfo,
  permissions: state => state.user.permissions,
  roles: state => state.user.roles,
  expires_in: state => state.user.expires_in,
  access_token: state => state.user.access_token,
  refresh_token: state => state.user.refresh_token,
}
export default getters
