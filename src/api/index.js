import axios from '@/axios.js'

var api = {
  // 获取热词
  searchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 获取搜索列表
  getSearchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  // 获取菜单列表
  getMenuList (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  // 首页下方（有格调内容区数据获取）
  resultsByKeywords (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  getProductList (params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  },
  // 获取产品详细信息
  getProductDetail (params) {
    return axios.get('/api/meituan/product/detail.json', params)
  },
  // 获取热点城市
  getHotCity (params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  // 获取最近城市
  getRencentCity (params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  // 获取省份
  getProvince (params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  // 获取城市列表
  getCityList (params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  },
  // 用户登陆
  getUserLogin (params) {
    return axios.get('/api/meituan/login', params)
  },
  // 用户注册
  getUserRegister (params) {
    return axios.get('/api/meituan/register', params)
  },
  // 获取推荐产品列表
  getRecommend (params) {
    return axios.get('/api/meituan/list/recommend.json', params)
  },
  // 获取分类列表
  getClassify (params) {
    return axios.get(' /api/meituan/list/classify.json', params)
  },
  // 获取区域列表
  getAreaList (params) {
    return axios.get('/api/meituan/list/areaList.json', params)
  },
  // 获取当前位置信息
  getCurPosition (params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  }
}

export default api
