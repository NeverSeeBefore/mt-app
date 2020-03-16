
import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // console.log(config)
  config.params = {
    ...config.params,
    appkey: '18743119027_1551866612751'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export default axios
