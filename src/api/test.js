import request from '@/utils/request'

export function weather () {
  return request({
    url: '/weather/',
    method: 'get',
    data: {
      version: 'v1',
      cityid: '101010100' // 北京
    }
  })
}
