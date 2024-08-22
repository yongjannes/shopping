import request from '../utils/request'
export const getHomeData = () => {
  return request({
    url: '/page/detail',
    method: 'get',
    params: {
      pageId: 0
    }
  })
}
